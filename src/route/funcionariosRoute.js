const express = require('express');
const router = express.Router();
const controller = require('../controller/funcionariosController');

router.get('/', controller.getAll);
router.get('/idade/:id', controller.getIdadeById);
router.get('/:id', controller.getById);
router.post('/', controller.postFuncionarios);
router.delete('/:id', controller.deleteFuncionarios);
router.put('/:id', controller.putFuncionario);
router.patch('/:id', controller.patchFuncionario);

module.exports = router;
