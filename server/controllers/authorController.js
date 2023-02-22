const { author } = require("../models");

const getAll = async function (req, res) {
    try {
        const authorsData = await author.findAll();
        if (authorsData.length > 0) {
            res
                .status(200)
                .json({ message: "Connection successful", data: authorsData });
        } else {
            res.status(200).json({ message: "Connection failed", data: [] });
        }
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

const getAuthor = async function (req, res) {
    try {
        const authorsData = await author.findAll({
            where: { id: req.params.id },
        });
        if (authorsData[0]) {
            res
                .status(200)
                .json({ message: "Connection successful", data: authorsData[0] });
        } else {
            res.status(200).json({ message: "Connection failed", data: {} });
        }
    } catch (error) {
        res.status(404).json({ message: error });
    }
};


const create = async function (req, res) {
    try {
        const checkData = await author.findAll({
            where: {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
            },
        });
        if (checkData.length > 0) {
            res.status(500).json({ message: "first_name/last_name has already in use" });
        } else {
            await author.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
            })
                .then(({ dataValues }) => {
                    res.status(201).json({
                        message: "author successful created",
                        data: {
                            first_name: dataValues.first_name,
                            last_name: dataValues.last_name,
                            id: dataValues.id,
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
        await author
            .findAll({ where: { id: req.body.id } })
            .then(async (result) => {
                if (result[0]) {
                    await author.update(
                        {
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                        },
                        { where: { id: req.body.id } }
                    );
                    res.status(200).json({
                        message: "update successful",
                        data: {
                            id: req.body.id,
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
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

const deleteAuthor = async function (req, res) {
    try {
        await author
            .findAll({ where: { id: req.body.id } })
            .then(async (result) => {
                if (result[0]) {
                    await author.destroy({ where: { id: req.body.id } });
                    res.status(200).json({ message: "delete user successfully" });
                } else {
                    res.status(404).json({ message: "id user not found" });
                }
            });
    } catch (error) {
        res.status(404).json({ message: error });
    }
};


module.exports = { getAll, getAuthor, create, edit, deleteAuthor }