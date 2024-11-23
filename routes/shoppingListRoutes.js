const express = require('express');
const { addMember, removeMember } = require('../app/endpoints');
const { auth } = require('../app/middleware/auth');

const router = express.Router();

router.post('/:listId/members', auth, addMember);

router.delete('/members/:memberId', auth, removeMember);

module.exports = router;