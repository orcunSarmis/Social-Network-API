const { User, Thought } = require('../models');

const thoughtController = {

    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
        .select('-__v')
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // get a thought by id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
        .select(-__v)
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({ message: 'No thought found' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },

    // create a new thought
    createThought({ body}, res) {
        Thought.create(body)
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                console.log(err);
            }
            return User.findOneAndUpdate(
                { username: dbThoughtData.userName },
                {$push: { thoughts: dbThoughtData._id }},
                { new: true }
            );
        })
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(400).json({ message: 'No user with this id' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
    },
  
}

module.exports = thoughtController;