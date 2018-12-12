GET /api/todos
this should return all information for all todos

GET /api/todos/:id
this should return the information for just the one todo item that has the id from the route

POST /api/todos
this should modify your todoList or todoObj and add a todo item from your request body

PUT /api/todos/:id
this should modify or replace the item in your todoList or todoObj with the request body

DELETE /api/todos/:id
this should remove the todo item that matches the id from the route from your todoList or todoObj