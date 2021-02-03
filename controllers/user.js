// Renner Yannick
const User = require('../models/user');

exports.user_test = function (req, response){
    response.send('Test the User API');
}

exports.user_get_all = function(request, response){
    User.find({},
        function(error, users){
            if(error) {
                return next(error);
            }
            response.send(users);
        });
};

exports.user_get = function(request, response) {
    User.findById(request.params.id,
        function(error, todo) {
            if(error) {
                return next(error);
            }
            response.send(todo);
        });
};

exports.user_create = function (request, response, next) {
    const requestBody = request.body;
    const user = new User({
        userName : requestBody.userName,
        email : requestBody.email,
        userId : Math.floor(Math.random() * 10000000)
    });

    user.save(function (error) {
        if(error) {
            return next(error);
        }
        response.send('User Created Succesfully!');
    })
};

exports.user_update = function(request, response, next) {
    User.findByIdAndUpdate(request.params.id,
        {$set: request.body},
        function(error, user) {
            if(error) {
                return next(error);
            }
            response.send('The user '+ user.userName + ' has been updated!');
        });
};

exports.user_delete = function(request, response, next) {
    User.findByIdAndDelete(request.params.id,
        function(error){
            if(error) {
                return next(error);
            }
            response.send('The user has been deleted');
        });
};