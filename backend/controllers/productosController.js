const Producto = require('../models/producto');

exports.getAll = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener productos' });
    }
};

exports.getOne = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.codProducto);
        if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener producto' });
    }
};

exports.create = async (req, res) => {
    try {
        const nuevo = await Producto.create(req.body);
        res.status(201).json(nuevo);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear producto' });
    }
};

exports.update = async (req, res) => {
    try {
        const actualizado = await Producto.update(req.body, {
            where: { codProducto: req.params.codProducto }
        });
        if (actualizado[0] === 0) return res.status(404).json({ error: 'Producto no encontrado' });
        res.json({ message: 'Producto actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar producto' });
    }
};
exports.remove = async (req, res) => {
    try {
        const eliminado = await Producto.destroy({
            where: { codProducto: req.params.codProducto }
        });
        if (eliminado === 0) return res.status(404).json({ error: 'Producto no encontrado' });
        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar producto' });
    }
};
