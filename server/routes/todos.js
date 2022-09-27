const { Todo } = require("../models/todo");
const express = require("express");
const { todoSchema } = require("../validation/todo");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    const todos = await Todo.find().sort({ date: -1 });
    const filteredTodos = todos.filter((todo) => todo.uid === req.user._id);
    res.status(200).send(filteredTodos);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/", auth, async (req, res) => {
  const { error } = todoSchema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const { name, author, isComplete, date, uid } = req.body;

  let todo = new Todo({
    name,
    author,
    isComplete,
    date,
    uid,
  });

  try {
    todo = await todo.save();
    res.status(201).send(todo);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.put("/:id", auth, async (req, res) => {
  const id = req.params.id;
  const { name, author, isComplete, date, uid } = req.body;

  const { error } = todoSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const todo = await Todo.findById(id);
    if (!todo) return res.status(404).send("Todo is not found");

    if (todo.uid !== req.user._id)
      return res.status(401).send("Todo update failed");

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      {
        name,
        author,
        isComplete,
        date,
        uid,
      },
      { new: true }
    );
    res.status(200).send(updatedTodo);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.patch("/:id", auth, async (req, res) => {
  const id = req.params.id;

  try {
    const todo = await Todo.findById(id);
    if (!todo) return res.status(404).send("Todo is not found");
    if (todo.uid !== req.user._id)
      return res.status(401).send("Todo update failed");
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      {
        isComplete: !todo.isComplete,
      },
      {
        new: true,
      }
    );
    res.status(200).send(updatedTodo);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete("/:id", auth, async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findById(id);
    if (!todo) return res.status(404).send("Todo is not found");
    if (todo.uid !== req.user._id)
      return res.status(401).send("Todo deletion failed");
    const deletedTodo = await Todo.findByIdAndDelete(id);
    res.status(200).send(deletedTodo);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
