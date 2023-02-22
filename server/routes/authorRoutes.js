const express = require("express");
const authorRouter = express.Router();

const { author } = require("../controllers");

authorRouter.get("/", author.getAll);
authorRouter.get("/:id", author.getAuthor);
authorRouter.post("/create", author.create);
authorRouter.put("/update", author.edit);
authorRouter.delete("/delete", author.deleteAuthor);

module.exports = authorRouter;