// Import User model
const { User, Thought } = require('../models');

 // get all users
const userController ={
getAllUsers(req, res) {
    User.find({})
    .populate({
        path: 'thoughts',
        select: '-__v'
    })
    .select('-__v')
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
},

// get one user by id GET ?api?users/:id
getUserById({ params }, res) {
    User.findOne({ _id: params.id })
    .populate({ 
        path: 'thoughts',
        select: '-__v'
    })
    .populate({ 
        path: 'friends',
        select: '-__v'
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
},

// Create a user by POST  
createUser({ body }, res){
    User.create(body)
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.status(400).json(err));
},

// update user by id PUT /api/users/:id
updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id:params.id }, body, { new: true, runValidators: true })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => res.status(400).json(err));
},

// delete user by id /api/users/:id
deleteUser({ params}, res) {
    User.findOneAndDelete({ _id: params.id })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => res.status(400).json(err));
},

// add friend to user list
addFriend({ params }, res) {
    User.findOneAndUpdate({ _id: params.userId }, { $push: { friends: params.friendId }},
        {new: true, runValidators: false}
        )
.then(dbUserData => {
    if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
    }
    res.json(dbUserData);
}) 
.catch(err => {
    console.log(err);
    res.status(400).json(err);
})
},

// delete friend
deleteFriend({ params }, res) {
    User.findOneAndUpdate(
        { _id: params.userId },
         // Here, using the MongoDB $pull operator to remove the specific friend from the friends
        { $pull: { friends: params.firendId }},
        { new: true }
    )
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
 }
};

module.exports = userController;