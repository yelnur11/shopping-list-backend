const express = require('express');
const createList = require('../app/endpoints/createList');
const listShoppingLists = require('../app/endpoints/listShoppingLists');
const getShoppingList = require('../app/endpoints/getShoppingList');
const updateList = require('../app/endpoints/updateList');
const deleteList = require('../app/endpoints/deleteList');
const { auth } = require('../app/middleware/auth');

const router = express.Router();

router.post('/create', auth, createList);
router.get('/list', auth, listShoppingLists);
router.get('/get/:id', auth, getShoppingList);
router.put('/update/:id', auth, updateList);
router.delete('/delete/:id', auth, deleteList);

module.exports = router;