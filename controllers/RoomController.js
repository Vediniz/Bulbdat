const Room = require('../models/RoomModel');

exports.createRoom = async (req, res, next) => {
  try {
    const newRoom = new Room({
      name: req.body.name,
      devices: [] 
    });

    await newRoom.save();

    res.status(201).json({ message: 'Cômodo criado com sucesso!', room: newRoom });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o cômodo.' });
  }
};
