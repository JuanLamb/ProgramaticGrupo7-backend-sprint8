const express = require('express');
const router = express.Router();
const productsAPIController = require("../../controllers/api/productsAPIController");

// Rutas
// Listado de todos los productos en la db
router.get('/', productsAPIController.list);

// Detalle de usuario
// router.get('/:id', productsAPIController.detail);

module.exports = router;