import { Song } from '../models/song.model.js';
import { Artist } from '../models/artist.model.js';
import { serverError } from '../helper/http.js';


export class SongController {

    getSongs = async (req, res) => {
        try {
            const songs = await Song.findAll();
            res.json(songs); 
        } catch (e) {
            serverError(res, e.message);
        }
    }

    findById = async (req, res) => {
        try {
            const id = Number(req.params.id);
            const song = await Song.findByPk(id);
            if (!song) return res.status(404).json({ message: 'Song not found' });
            res.json(song);
        } catch (e) {
            serverError(res, e.message);
        }
    }

    createSong = async (req, res) => {
        try {
            const { title, artistId, releaseYear, duration, coverUrl } = req.body;
            if (!title || !artistId || !releaseYear || !duration || !coverUrl) {
                return res.status(400).json({ message: 'All fields are required' });
            }
            const song = await Song.create(req.body);
            res.status(201).json(song);
        } catch (e) {
            serverError(res, e.message);
        }
    }

    updateSong = async (req, res) => {
        try {
            const id = Number(req.params.id);
            const { title, artistId, releaseYear, duration, coverUrl } = req.body;
            if (!title || !artistId || !releaseYear || !duration || !coverUrl) {
                return res.status(400).json({ message: 'All fields must be provided' });
            }
            const song = await Song.findByPk(id);
            if (!song) return res.status(404).json({ message: 'Song not found' });

            song.set({ title, artistId, releaseYear, duration, coverUrl });
            await song.save();
            res.status(200).json(song);
        } catch (e) {
            serverError(res, e.message);
        }
    }

    deleteSong = async (req, res) => {
        try {
            const songId = parseInt(req.params.id);
            const song = await Song.findOne({ where: { id: songId } });
            if (!song) return res.status(404).json({ message: 'Song not found' });
            await Song.destroy({ where: { id: songId } });
            res.status(200).json(song);
        } catch (e) {
            serverError(res, e.message);
        }
    }

    getSongsWithArtists = async (req, res) => {
        try {
            const songs = await Song.findAll({
                include: {
                    model: Artist,
                    attributes: [ 'name', 'bio', 'photoUrl'],
                },
            });
            res.json(songs);
        } catch (e) {
            serverError(res, e.message);
        }
    }

    getSongsByArtistId = async (req, res) => {
        try {
            const artistId = Number(req.params.artistId);
            const songs = await Song.findAll({
                where: { artistId },
            });
            if (songs.length === 0) {
                return res.status(404).json({ message: 'No songs found for this artist' });
            }
            res.json(songs);
        } catch (e) {
            serverError(res, e.message);
        }
    }

    
}