var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var todoList = [
    {
        id: 1,
        todo: "Implement a REST API"
    },
    {
        id: 2,
        todo: "Put away clean laundry"
    },
    {
        id: 3,
        todo: "Call mom back"
    }
];


/* //example to get specific list item
var todoObj = {
    "1": {todo: "implement a REST API"},
    "2": {todo: "say hello"}
}

app.get('/api/todos/:id', function (req, res, nextFn) {
    const todoItm = todoObj[req.params.id]
    if (todoItm) {
        //next 3 lines do the same thing; res.json() is probably idiomatic
        // res.send(todoObj[idFromUrl])
        // res.send(JSON.stringify(todoObj[idFromUrl]))
        res.json(todoItm)
    } else {
        res.status(404).send('todo not found! sorry dude :(')
    }
}) */


// // GET /api/todos retrieves data
// app.get('/api/todos', function (req, res, next) {
//     res.send(todoList);
// })

// // GET /api/todos/:id retrieves data
app.get('/api/todos/:id', function (req, res, next) {
    console.log(req.params.id);
    // req.params: {"id:"}
    
//     res.send(todoList[id]);
    // for (todoList task: todoList;) {
    //     if task.getId().equals(someId) {
    //         console.log(todoList.id);
    //     }
    // }
})

// // POST /api/todos creating a new todo list item
// app.post('/api/todos', function (req, res, next) {
//     console.log(todoList);
// })

// // PUT /api/todos/:id
// app.put('/api/todos/:id', function (req, res, next) {

// }) 

// // DELETE /api/todos/:id

app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
})