const express = require('express');

const router = express.Router();

const {
  getAllTasks,
  createTask,
  deleteTask,
  getTask,
  updateTask,
} = require('../controllers/tasks');

//route path will match the middleware use in the app.use
router.route('/').get(getAllTasks).post(createTask);

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
