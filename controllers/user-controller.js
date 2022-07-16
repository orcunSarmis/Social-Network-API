// Import User model
const { User } = require('../models');


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
    .then(dbUserData => res,json(dbUserData))
    .catch(err => res.status(400).json(err));
}
}

module.exports = userController;