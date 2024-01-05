// app.js
const express = require('express');
const mongoose = require('mongoose');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://romitdangodara29102000:760sq58fY6EyOQ6M@middlewareproject.gpnoukr.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.render('index', { tasks });
});

app.post('/tasks', async (req, res) => {
  const { title, description, status } = req.body;
  const task = new Task({ title, description, status });
  await task.save();
  res.redirect('/');
});

// Update task by ID
app.get('/tasks/:id/edit', async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.render('edit', { task });
});

app.post('/tasks/:id/edit', async (req, res) => {
  const { title, description, status } = req.body;
  await Task.findByIdAndUpdate(req.params.id, { title, description, status });
  res.redirect('/');
});

// Delete task by ID
app.get('/tasks/:id/delete', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
