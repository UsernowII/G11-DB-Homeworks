import { Artist } from '../models/artist.model.js';
import { Song } from '../models/song.model.js';
import { serverError } from '../helper/http.js';
import { Op } from 'sequelize';

export class ArtistController {

    getArtists = async (req, res) => {
        try {
            const artists = await Artist.findAll();
            res.json(artists); 
        } catch (e) {
            serverError(res, e.message);
        }
    }

    findById = async (req, res) => {
        try {
            const id = Number(req.params.id);
            const artist = await Artist.findByPk(id);
            if (!artist) return res.status(404).json({ message: 'Artist not found' });
            res.json(artist);
        } catch (e) {
            serverError(res, e.message);
        }
    }

    createArtist = async (req, res) => {
        try {
            const { name, bio, photoUrl } = req.body;
            if (!name || !bio || !photoUrl) return res.status(400).json({ message: 'All fields are required' });
            const artist = await Artist.create(req.body);
            res.status(201).json(artist);
        } catch (e) {
            serverError(res, e.message);
        }
    }

    updateArtist = async (req, res) => {
        try {
            const id = Number(req.params.id);
            const { name, bio, photoUrl } = req.body;
            if (!name || !bio || !photoUrl) {
                return res.status(400).json({ message: 'All fields must be provided' });
            }
            const artist = await Artist.findByPk(id);
            if (!artist) return res.status(404).json({ message: 'Artist not found' });

            artist.set({ name, bio, photoUrl });
            await artist.save();
            res.status(200).json(artist);
            
        } catch (e) {
            serverError(res, e.message);
        }
    }

    deleteArtist = async (req, res) => {
        try {
            const artistId = parseInt(req.params.id);
            const artist = await Artist.findOne({ where: { id: artistId } });
            if (!artist) return res.status(404).json({ message: 'Artist not found' });
            await Artist.destroy({ where: { id: artistId } });
            res.status(200).json(artist);
        } catch (e) {
            serverError(res, e.message);
        }
    }

    getSongsByArtist = async (req, res) => {
        try {
            const artistId = Number(req.params.id);
            const songs = await Song.findAll({
                where: { artistId },
            });
            if (songs.length === 0) {
                return res.status(404).json({ message: 'No songs found for this artist' });
            }
            res.status(200).json(songs);
        } catch (e) {
            serverError(res, e.message);
        }
    }

    getArtistsBySongDuration = async (req, res) => {
        try {
            const duration = Number(req.params.duration);
            const artists = await Artist.findAll({
                include: {
                    model: Song,
                    where: {
                        duration: {
                            [Op.gte]: duration,
                        },
                    },
                    required: true,
                },
            });
            if (artists.length === 0) {
                return res.status(404).json({ message: 'No artists found with songs of this duration' });
            }
            res.json(artists);
        } catch (e) {
            serverError(res, e.message);
        }
    }
}