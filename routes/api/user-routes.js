const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
.route('/')
.get(getAllUsers)
.post(createUser);