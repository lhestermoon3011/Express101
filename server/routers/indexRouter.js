/**
  aboutRouter.js
**/
const express = require("express");
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require("simple-json-store");
const store = new SimpleJsonStore("./data.json", { notes: [] });

router.get("/", (req, res) => {
  let viewModel = req.viewModel;
  res.render("index.pug", viewModel);
});

router.post("/", (req, res) => {
  let notes = store.get("notes");
  notes.push({
    title: req.body.title,
    content: req.body.content
  });
  console.log(notes);
  store.set("notes", notes);
  // res.redirect("/");
  res.json(notes);
});

module.exports = router;
