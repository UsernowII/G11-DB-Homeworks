const Artist = require('../models/Artist');

exports.createArtist = async (req, res) => {
    try {
        const artist = await Artist.create(req.body);
        res.status(201).json(artist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllArtists = async (req, res) => {
    try {
        const artists = await Artist.findAll();
        res.status(200).json(artists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateArtist = async (req, res) => {
    try {
        const artist = await Artist.findByPk(req.params.id);
        if (!artist) return res.status(404).json({ message: 'Artist not found' });
        await artist.update(req.body);
        res.status(200).json(artist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteArtist = async (req, res) => {
    try {
        const artist = await Artist.findByPk(req.params.id);
        if (!artist) return res.status(404).json({ message: 'Artist not found' });
        await artist.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
