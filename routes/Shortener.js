const Joi = require("joi");
const express = require("express");
const shortener = express.Router();
const cors = require("cors");

const Short = require("../models/short.js");

shortener.use(cors());

const schema = Joi.object().keys({
    url: Joi.string().uri({
        scheme: [/https?/],
    }),
    name: Joi.string().token().min(1).max(100).required()
});

shortener.post("/save", (req, res) => {
    const linkData = {
        url: req.body.url,
        name: req.body.name,
    };


    const result = Joi.validate(linkData, schema);
    console.log(req.body)
    if (result.error === null) {

        Short.findOne({
            where: {
                name: linkData.name,
            },
        }).then((corelation) => {
            if (!corelation) {

                Short.create(linkData).then(
                    (response) => {
                        res.send('Shortening Successfull!')
                    },
                    (error) => {
                        res.send('Shortening Error!')
                    }
                );
            } else {
                res.send("Name already used")
            }
        });
    } else {
        res.send("Wrong data")
    }
});

module.exports = shortener;