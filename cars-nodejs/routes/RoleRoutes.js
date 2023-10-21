const rolesController = require('../controller/RolesController');
const express = require('express');
const router = express.Router();

router.post('/', rolesController.addRoles);
router.get('/', rolesController.getRoles);

module.exports = router
