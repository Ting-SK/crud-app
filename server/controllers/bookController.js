const { book } = require("../models");

const getAll = async function (req, res) {
    try {
        const booksData = await book.findAll();
        if (booksData.length > 0) {
            res
                .status(200)
                .json({ message: "Connection successful", data: booksData });
        } else {
            res.status(200).json({ message: "Connection failed", data: [] });
        }
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

const getBook = async function (req, res) {
    try {
        const booksData = await book.findAll({
            where: { id: req.params.id },
        });
        if (booksData[0]) {
            res
                .status(200)
                .json({ message: "Connection successful", data: booksData[0] });
        } else {
            res.status(200).json({ message: "Connection failed", data: {} });
        }
    } catch (error) {
        res.status(404).json({ message: error });
    }
};


const create = async function (req, res) {
    try {
        const checkData = await book.findAll({
            where: {
                title: req.body.title,
                year: req.body.year
            },
        });
        if (checkData.length > 0) {
            res.status(500).json({ message: "title/year has already in use" });
        } else {
            await book.create({
                title: req.body.title,
                author_id: req.body.author_id,
                created_at: new Date().toISOString(),
                year: req.body.year,
                image: req.body.image,
            })
                .then(({ dataValues }) => {
                    res.status(201).json({
                        message: "book successful created",
                        data: {
                            id: dataValues.id,
                            title: dataValues.title,
                            author_id: dataValues.author_id,
                            created_at: dataValues.created_at,
                            year: dataValues.year,
                            image: dataValues.image,
                        },
                    });
                });
        }
    } catch (error) {
        console.log('404')
        res.status(404).json({ message: error });
    }
};


const edit = async function (req, res) {
    try {
        await book
            .findAll({ where: { id: req.body.id } })
            .then(async (result) => {
                if (result[0]) {
                    await book.update(
                        {
                            title: req.body.title,
                            author_id: req.body.author_id,
                            created_at: new Date().toISOString(),
                            year: req.body.year,
                            image: req.body.image,
                        },
                        { where: { id: req.body.id } }
                    );
                    res.status(200).json({
                        message: "update successful",
                        data: {
                            id: req.body.id,
                            title: req.body.title,
                            author_id: req.body.author_id,
                            created_at: new Date().toISOString(),
                            year: req.body.year,
                            image: req.body.image,
                        },
                    });
                } else {
                    res.status(500).json({ message: "update failed" });
                }
            });
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

const deleteBook = async function (req, res) {
    try {
        await book
            .findAll({ where: { id: req.body.id } })
            .then(async (result) => {
                if (result[0]) {
                    await book.destroy({ where: { id: req.body.id } });
                    res.status(200).json({ message: "delete book successfully" });
                } else {
                    res.status(404).json({ message: "id book not found" });
                }
            });
    } catch (error) {
        res.status(404).json({ message: error });
    }
};


module.exports = { getAll, getBook, create, edit, deleteBook }