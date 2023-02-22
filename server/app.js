const app = require('express')()
const bodyParser = require("body-parser");

const authorRoutes = require('./routes/authorRoutes.js')
const bookRoutes = require('./routes/bookRoutes.js')

require("dotenv").config();

const port = 3000
const host = process.env.DB_HOST

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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