const express = require('express');
const { addItem, listItems, deleteItem, updateItem } = require('../app/endpoints');
const { auth } = require('../app/middleware/auth');

const router = express.Router();

router.post('/', auth, addItem);

router.get('/', auth, listItems);

router.delete('/:id', auth, deleteItem);

router.put('/:id', auth, updateItem);

module.exports = router;