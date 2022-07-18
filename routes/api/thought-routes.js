const router = require('express').Router();

const { post } = require('.');
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

// POST reaction - /api/thoughts/:thoughtId/reactions
router
.route('/:thoughtId/reactions')
post(addReaction);

// DELETE reaction - /api/thoughts/:thoughtId/reactions/:reactionId
router
.route('/:thoughtId/reactions/:reactionId')
delete(deleteReaction);

module.exports = router;