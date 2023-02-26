
const path = require("path");
const fileUpload = require("express-fileupload");
const express = require('express')
const cors = require("cors");
const app = express()

const authorRoutes = require('./routes/authorRoutes.js')
const bookRoutes = require('./routes/bookRoutes.js')

require("dotenv").config();

const port = 3000
const host = process.env.DB_HOST
const dir = path.join(__dirname, "uploads");

app.use("/uploads", express.static(dir));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    fileUpload({
        createParentPath: true,
    })
);

app.use('/authors', authorRoutes)
app.use('/books', bookRoutes)

app.use((req, res, next) => {
    const err = new Error(`${req.url} not found in this server`);
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});

app.listen(port, host, () => {
    console.log(`server running in port ${port} on host ${host}`);
})