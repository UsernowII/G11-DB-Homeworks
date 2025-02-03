const { Router } = require('express');
const { sequelize } = require('../bd/sequelize');
const { serverError } = require('../helper/http');

const router = Router();

router.post('/artists', async (req, res) => {
    try {
        const { name, bio, photoUrl } = req.body;

        if (!name || !bio || !photoUrl) return res.status(400).json({ message: 'All fields are required' });

        const [result] = await sequelize.query(`
            INSERT INTO artists (name, bio, photoUrl)
            VALUES (:name, :bio, :photoUrl)
            RETURNING *;
        `, {
            replacements: { name, bio, photoUrl },
            type: sequelize.QueryTypes.INSERT,
        });

        res.status(201).json(result[0]);
        
    } catch (e) {
        serverError(res, e.message);
    }
});

router.get('/artists', async (req, res) => {
    try {
        const artists = await sequelize.query(`
            SELECT * FROM artists;
        `, {
            type: sequelize.QueryTypes.SELECT,
        });

        res.json(artists);
    } catch (error) {
        serverError(res, error.message);
    }
});

router.get('/artists/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const [artist] = await sequelize.query(`
            SELECT * FROM artists
            WHERE id = :id;
        `, {
            replacements: { id },
            type: sequelize.QueryTypes.SELECT,
        });

        if (!artist) return res.status(404).json({ message: 'Artist not found' });

        res.json(artist);
    } catch (e) {
        serverError(res, e.message);
    }
});

router.put('/artists/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { name, bio, photoUrl } = req.body;

        if (!name || !bio || !photoUrl) {
            return res.status(400).json({ message: 'All fields must be provided' });
        }

        const [results] = await sequelize.query(`
            UPDATE artists
            SET name = :name,
                bio = :bio,
                photoUrl = :photoUrl
            WHERE id = :id
            RETURNING *;
        `, {
            replacements: { id, name, bio, photoUrl },
            type: sequelize.QueryTypes.UPDATE,
        });

        if (!results.length) return res.status(404).json({ message: 'Artist not found' });

        res.status(200).json(results[0]);
    } catch (e) {
        serverError(res, e.message);
    }
});

router.delete('/artists/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const results = await sequelize.query(`
            DELETE FROM artists
            WHERE id = :id
            RETURNING *;
        `, {
            replacements: { id },
            type: sequelize.QueryTypes.DELETE,
        });

        if (!results.length) return res.status(404).json({ message: 'Artist not found' });

        res.status(200).json(results[0]);
    } catch (e) {
        serverError(res, e.message);
    }
});

module.exports = router;