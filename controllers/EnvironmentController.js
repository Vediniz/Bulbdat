const Environment = require('../models/EnvironmentModel');
const mongoose = require('mongoose');

const getEnvironments = async (req, res) => {
    try {
        const environments = await Environment.find({}).sort({ createdAt: -1 });
        res.status(200).json({ environments });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEnvironment = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such Environment' });
    }

    try {
        const environment = await Environment.findById(id);

        if (!environment) {
            return res.status(404).json({ error: 'No such Environment' });
        }

        res.status(200).json({ environment });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const createEnvironment = async (req, res) => {
    const { name } = req.body;

    try {
        const environment = await Environment.create({ name });
        res.status(200).json(environment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteEnvironment = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such Environment' });
    }

    try {
        const environment = await Environment.findOneAndDelete({ _id: id });

        if (!environment) {
            return res.status(400).json({ error: 'No such Environment' });
        }

        res.status(200).json(environment);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateEnvironment = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such Environment' });
    }

    try {
        const environment = await Environment.findOneAndUpdate({ _id: id }, {
            ...req.body
        });

        if (!environment) {
            return res.status(400).json({ error: 'No such Environment' });
        }

        res.status(200).json(environment);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getEnvironments,
    getEnvironment,
    createEnvironment,
    updateEnvironment,
    deleteEnvironment,
};
