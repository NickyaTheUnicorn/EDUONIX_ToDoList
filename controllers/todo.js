// Renner Yannick
const Todo = require('../models/todo');

exports.test = function(request, res) {
    res.send('Test todo api');
};

exports.todo_all = function(request,response, next) {
    Todo.find({}, 
        function(error, todos) {
            if (error) {
                return next(error);
            }
            response.send(todos);
    });
};

exports.todo_detail = function(request, response, next) {
    Todo.findById(request.params.id, 
        function(error, todo) {
            if (error)
                return next(error);
            response.send(todo);
    });
};

exports.todo_create = function(request, response, next) {
    const requestBody = request.body;
    const todo = new Todo(
        {
            title: requestBody.name,
            dueBy: requestBody.dueBy,
            createdOn: Date.now(),
            status: "open",
            active: true,
            userName: requestBody.userName
        }
    );
    todo.save(function (error) {
        if (error) {
            return next(error);
        }
        response.send('Todo Added successfully!');
    });
};

exports.todo_update = function(request, response, next) {
    Todo.findByIdAndUpdate(request.params.id, 
        {$set: request.body}, 
        function(error, todo){
            if (error) {
                return next(error);
            }
            response.send('Todo '+ todo.id+' updated');
    });
};

exports.todo_take = function(request, response, next) {
    Todo.findByIdAndUpdate(request.params.id, 
        {status: "doing"}, 
        function(error, todo) {
            if(error) {
                return next(error);
            }
            response.send('Todo ' + todo.id + ' is taken!');
    });
};

exports.todo_close = function (request, response, next) {
    Todo.findByIdAndUpdate(request.params.id, 
        {
            status: "closed",
            active: false
        },
        function(error, todo) {
            if(error) {
                return next(error);
            }
            response.send('Todo ' + todo.id + ' is now closed!');
        });
};

exports.todo_delete = function(request, response, next) {
    Todo.findByIdAndDelete(request.params.id, 
        function(error) {
            if (error) {
                return next(error);
            }
            response.send('Todo Deleted successfully!');
    });
};