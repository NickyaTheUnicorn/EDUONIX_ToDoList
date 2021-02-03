// Renner Yannick
const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todo.js');

router.get('/test', todoController.test);

router.get('/', todoController.todo_all);
router.get('/:id', todoController.todo_detail);
router.post('/create', todoController.todo_create);
router.put('/:id/update', todoController.todo_update);
router.put('/take/:id', todoController.todo_take);
router.put('/close/:id', todoController.todo_close);
router.delete('/:id/delete', todoController.todo_delete);

module.exports = router;