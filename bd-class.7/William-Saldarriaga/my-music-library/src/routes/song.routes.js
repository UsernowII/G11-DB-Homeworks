const { Router } = require('express');
const { sequelize } = require('../bd/sequelize');
const { serverError } = require('../helper/http');

const router = Router();

router.post('/songs', async (req, res) => {
    try {
        const { title, artistId, releaseYear, duration, coverUrl } = req.body;

        if (!title || !artistId || !releaseYear || !duration || !coverUrl) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const [result] = await sequelize.query(`
            INSERT INTO songs (title, artistId, releaseYear, duration, coverUrl)
            VALUES (:title, :artistId, :releaseYear, :duration, :coverUrl)
            RETURNING *;
        `, {
            replacements: { title, artistId, releaseYear, duration, coverUrl },
            type: sequelize.QueryTypes.INSERT,
        });

        res.status(201).json(result[0]);
        
    } catch (e) {
        serverError(res, e.message);
    }
});

router.get('/songs', async (req, res) => {
    try {
        const songs = await sequelize.query(`
            SELECT * FROM songs;
        `, {
            type: sequelize.QueryTypes.SELECT,
        });

        res.json(songs);
    } catch (error) {
        serverError(res, error.message);
    }
});

router.get('/songs/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const [song] = await sequelize.query(`
            SELECT * FROM songs
            WHERE id = :id;
        `, {
            replacements: { id },
            type: sequelize.QueryTypes.SELECT,
        });

        if (!song) return res.status(404).json({ message: 'Song not found' });

        res.json(song);
    } catch (e) {
        serverError(res, e.message);
    }
});

router.put('/songs/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { title, artistId, releaseYear, duration, coverUrl } = req.body;

        if (!title || !artistId || !releaseYear || !duration || !coverUrl) {
            return res.status(400).json({ message: 'All fields must be provided' });
        }

        const [results] = await sequelize.query(`
            UPDATE songs
            SET title = :title,
                artistId = :artistId,
                releaseYear = :releaseYear,
                duration = :duration,
                coverUrl = :coverUrl
            WHERE id = :id
            RETURNING *;
        `, {
            replacements: { id, title, artistId, releaseYear, duration, coverUrl },
            type: sequelize.QueryTypes.UPDATE,
        });

        if (!results.length) return res.status(404).json({ message: 'Song not found' });

        res.status(200).json(results[0]);
    } catch (e) {
        serverError(res, e.message);
    }
});

router.delete('/songs/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const results = await sequelize.query(`
            DELETE FROM songs
            WHERE id = :id
            RETURNING *;
        `, {
            replacements: { id },
            type: sequelize.QueryTypes.DELETE,
        });

        if (!results.length) return res.status(404).json({ message: 'Song not found' });

        res.status(200).json(results[0]);
    } catch (e) {
        serverError(res, e.message);
    }
});

module.exports = router;
