const express = require("express");
const publicRouter = require("../router/publicRouter");
const app = express();

//http://localhost:3001
app.get("/", (req,res,next) => {
    res.status(200).json("Message: Service is up");
});

//router middleware
app.use("/public", publicRouter);

//add middleware: to handle errors and bad url paths
app.use((req,res,next) => {
    const error = new Error("NOT FOUND!!");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next)=> {
    res.status(error.status || 500).json({
        error:{
            message: error.message,
            status: error.status,
            method: req.method,

        },
    });
});



module.exports = app;