const { book } = require("../models");

const getAll = async function (req, res) {
    try {
        const booksData = await book.findAll();
        if (booksData.length > 0) {
            res
                .status(200)
                .json({ message: "Connection successful", data: booksData });
        } else {
            res.status(404).json({ message: "Books not found", data: [] });
        }
    } catch (error) {
        res.status(500).json({ message: error });
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
            res.status(204).json({ message: "Book not found", data: {} });
        }
    } catch (error) {
        res.status(500).json({ message: error });
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
            const { title, author_id, year } = req.body
            const errors = {}
            const dataToSave = {}
            if (title) {
                dataToSave.title = title
            } else {
                errors.title = "title cannot be empty"
            }
            if (author_id) {
                dataToSave.author_id = author_id
            } else {
                errors.author_id = "author_id cannot be empty"
            }
            if (year) {
                dataToSave.year = year
            } else {
                errors.year = "year cannot be empty"
            }
            if (!!req?.files?.image) {
                let file = req.files.image;
                let file_path = "uploads/books/" + new Date().getTime() + file.name;
                file.mv(file_path);
                dataToSave.image = file_path;
            }
            dataToSave.created_at = new Date().toISOString()
            if (Object.keys(errors)?.length) {
                res.status(500).json({ ...errors });
            } else {
                await book.create(dataToSave)
                    .then(({ dataValues }) => {
                        res.status(201).json({
                            message: "book successfuly created",
                            data: dataValues,
                        });
                    })
            }
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

const edit = async function (req, res) {
    try {
        await book
            .findAll({ where: { id: req.body.id } })
            .then(async (result) => {
                if (result[0]) {
                    const { title, author_id, year } = req.body
                    const errors = {}
                    const dataToSave = {}
                    if (title) {
                        dataToSave.title = title
                    } else {
                        errors.title = "title cannot be empty"
                    }
                    if (author_id) {
                        dataToSave.author_id = author_id
                    } else {
                        errors.author_id = "author_id cannot be empty"
                    }
                    if (year) {
                        dataToSave.year = year
                    } else {
                        errors.year = "year cannot be empty"
                    }

                    if (!!req?.files?.image) {
                        let file = req.files.image;
                        let file_path = "uploads/books/" + new Date().getTime() + file.name;
                        file.mv(file_path);
                        dataToSave.image = file_path;
                    }

                    dataToSave.updated_at = new Date().toISOString()
                    if (Object.keys(errors)?.length) {
                        res.status(500).json({ ...errors });
                    } else {
                        await book.update(dataToSave, { where: { id: req.body.id } });
                        res.status(200).json({
                            message: "update successful",
                            data: {
                                id: result[0]?.id,
                                title: dataToSave.title,
                                author_id: dataToSave.author_id,
                                created_at: result[0]?.created_at,
                                updated_at: dataToSave.updated_at,
                                year: dataToSave.year,
                                image: dataToSave?.image
                            },
                        });
                    }
                } else {
                    res.status(500).json({ message: "update failed" });
                }
            });

    } catch (error) {
        res.status(500).json({ message: error });
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
        res.status(500).json({ message: error });
    }
};

module.exports = { getAll, getBook, create, edit, deleteBook }