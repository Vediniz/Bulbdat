const Room = require('../models/RoomModel');
const mongoose = require('mongoose');

const getRooms = async (req, res) => {
    try {
        const rooms = await Room.find({}).sort({ createdAt: -1 });
        res.status(200).json({ rooms });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getRoom = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such Room' });
    }

    try {
        const room = await Room.findById(id);

        if (!room) {
            return res.status(404).json({ error: 'No such Room' });
        }

        res.status(200).json({ room });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const createRoom = async (req, res) => {
    const { name } = req.body;

    try {
        const room = await Room.create({ name });
        res.status(200).json(room);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteRoom = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such Room' });
    }

    try {
        const room = await Room.findOneAndDelete({ _id: id });

        if (!room) {
            return res.status(400).json({ error: 'No such Room' });
        }

        res.status(200).json(room);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateRoom = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such Room' });
    }

    try {
        const room = await Room.findOneAndUpdate({ _id: id }, {
            ...req.body
        });

        if (!room) {
            return res.status(400).json({ error: 'No such Room' });
        }

        res.status(200).json(room);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getRooms,
    getRoom,
    createRoom,
    updateRoom,
    deleteRoom,
};
