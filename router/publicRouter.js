const express = require("express");
const { publicSerivce, publicSerivceById } = require("../services/publicService");
const publicRouter = express.Router();



publicRouter.get("/", (req,res,next) => {
    publicSerivce().then(result => {
        res.status(200).json(result.data);
    })
    .catch(err => {
        res.status(500).json({
            error:{
                message: err.message,
            }
        });
    });
});

publicRouter.get('/:id', (req,res,next) =>{
    publicSerivceById(req.params.id).then(result => {
        res.status(200).json(result.data);
    })
    .catch((err) => {
        res.status(500).json({
            error: {
                message: err.message,
            },
        });
    });
});
module.exports = publicRouter;