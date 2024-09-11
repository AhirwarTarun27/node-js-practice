const express = require('express');

const app = express();
const tasks = require('./routes/task');

// adding middleware for reading the data from req.body;
app.use(express.json());

//routes
app.get('/hello', (req, res) => {
  res.send('Task Manager app');
});

//route route for the task file

app.use('/api/v1/tasks', tasks);

const port = 3002;

app.listen(port, console.log(`server is listening on port ${port}....`));
