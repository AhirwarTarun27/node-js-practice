const express = require('express');

const app = express();
const tasks = require('./routes/task');
const connectDB = require('./db/connect');
require('dotenv').config();

const notFound = require('./middleware/not-found');

// middleware to run static file like html
app.use(express.static('./public'));
// adding middleware for reading the data from req.body;
app.use(express.json());

//route for the task file
app.use('/api/v1/tasks', tasks);

app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(
      process.env.PORT,
      console.log(`server is listening on port ${process.env.PORT}....`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
