const { Todo } = require("../models/todo");
const express = require("express");
const Joi = require("joi");

const router = express.Router();
const schema = Joi.object({
  name: Joi.string().min(3).max(200).required(),
  author: Joi.string().min(3).max(30),
  uid: Joi.string(),
  isComplete: Joi.boolean(),
  date: Joi.date(),
});

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find().sort({ date: -1 });
    res.status(200).send(todos);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  const { error } = schema.validate(req.body);

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

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { name, author, isComplete, date, uid } = req.body;

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const todo = await Todo.findById(id);
    if (!todo) return res.status(404).send("Todo is not found");

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

router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const todo = await Todo.findById(id);
    if (!todo) return res.status(404).send("Todo is not found");

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

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findById(id);
    if (!todo) return res.status(404).send("Todo is not found");

    const deletedTodo = await Todo.findByIdAndDelete(id);
    res.status(200).send(deletedTodo);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
