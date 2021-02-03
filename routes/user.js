// Renner Yannick
const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.get('/test', userController.user_test);
router.get('/', userController.user_get_all);
router.get('/:id', userController.user_get);
router.post('/create', userController.user_create);
router.put('/:id/update', userController.user_update);
router.delete('/:id/delete', userController.user_delete);


module.exports = router;