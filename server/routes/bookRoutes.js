const express = require("express");
const bookRouter = express.Router();

const { book } = require("../controllers");

bookRouter.get("/", book.getAll);
bookRouter.get("/:id", book.getBook);
bookRouter.post("/create", book.create);
bookRouter.put("/update", book.edit);
bookRouter.delete("/delete", book.deleteBook);

module.exports = bookRouter;