const model = require('../models/RolesModel');

const addRoles = async (req, res) => {
    try {
        if (!req.body.role_name || req.body.role_name.trim() == "") {
            return res.status(400).json({ "error": "role name is required" });
        }
        else {
            const Role = new model({ role_name: req.body.role_name });

            const createdRole = await Role.save();

            if (createdRole) {
                res.status(200).json(createdRole);
            } else {
                res.status(400).json({ Error: 'Error in insert new record' });
            }
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getRoles = async (req, res) => {
    try {
        const rollList = await model.find();
        res.json(rollList);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    addRoles,
    getRoles
};

