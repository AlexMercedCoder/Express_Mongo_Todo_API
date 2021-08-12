const Todo = require("../models/todo");
const { Router } = require("express");

////////////////////////////////////
// Create my Router
///////////////////////////////////
const router = Router();

////////////////////////////////////
// Index Route (get - "/todos")
// Returns All Todos
///////////////////////////////////

router.get("/", async (req, res) => {
  res.json(await Todo.find({}).catch((error) => res.status(400).json(error)));
});

////////////////////////////////////
// Show Route (get - "/todos/:id")
// Returns A Single Todo
///////////////////////////////////
router.get("/:id", async (req, res) => {
  res.json(
    await Todo.findById(req.params.id).catch((error) =>
      res.status(400).json(error)
    )
  );
});

////////////////////////////////////
// Create Route (post - "/todos")
// Creates a New Todo
///////////////////////////////////
router.post("/", async (req, res) => {
  res.json(
    await Todo.create(req.body).catch((error) => res.status(400).json(error))
  );
});

////////////////////////////////////
// Update Route (put - "/todos/:id")
// Updates a Particular Todo
///////////////////////////////////
router.put("/:id", async (req, res) => {
  res.json(
    await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true}).catch((error) =>
      res.status(400).json(error)
    )
  );
});

////////////////////////////////////
// Destroy Route (Delete - "/todos/:id")
// Updates a Particular Todo
///////////////////////////////////
router.delete("/:id", async (req, res) => {
    res.json(
      await Todo.findByIdAndRemove(req.params.id).catch((error) =>
        res.status(400).json(error)
      )
    );
  });

////////////////////////////////////
// Create my Router
///////////////////////////////////
module.exports = router;
