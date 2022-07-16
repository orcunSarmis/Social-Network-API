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
// Create a user by POST  
createUser({ body }, res){
    User.create(body)
    .then(dbUserData => res,json(dbUserData))
    .catch(err => res.status(400).json(err));
}
}