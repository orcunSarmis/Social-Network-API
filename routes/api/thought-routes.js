const router = require('express').Router();

const {
    getAllThoughts,
    getThoughById,
    createThought,
    deleteThought,
    updateThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// GET all thoughts and POST new thoughts - api/thoughts
router
.route('/')
.get(getAllThoughts)
.post(createThought);

// GET one thought, update, delete by id - api/thoughts/:id
router
.route('/:id')
.get(getThoughById)
.put(updateThought)
.delete(deleteThought);

