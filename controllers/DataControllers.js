const axios = require('axios');
const Device = require('../models/DeviceModel');

const devicesController = async (req, res, next) => {
  try {
    const devicesFromApi = await axios.get('http://localhost:8000/devices');
    const devices = devicesFromApi.data;

    for (const deviceData of devices) {
      const device = new Device({
        name: deviceData.name,
        model: deviceData.model,
        manufacturer: deviceData.manufacturer,
        brand: deviceData.brand,
        powerConsumption: deviceData.powerConsumption,
        voltage: deviceData.voltage
      });

      await device.save();
    }

    res.status(200).json({ message: 'Dispositivos importados com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao importar dispositivos.' });
  }
};

module.exports.devicesController = devicesController;
