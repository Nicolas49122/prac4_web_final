const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// Rutas para productos
router.get('/', productosController.getAll); // Obtener todos los productos
router.get('/:codProducto', productosController.getOne); // Obtener un producto por su código
router.post('/', productosController.create); // Crear un nuevo producto
router.put('/:codProducto', productosController.update); // Actualizar un producto por su código
router.delete('/:codProducto', productosController.remove); // Eliminar un producto por su código

module.exports = router;