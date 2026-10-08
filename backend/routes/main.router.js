const express = require("express");
const userRouter = require("./user.router")
const mainRouter = express.Router();
const repoRouter = require('./repo.router')
const issueRouter = require('./repo.router')


mainRouter.use(userRouter);
mainRouter.use(repoRouter);
mainRouter.use(issueRouter);


mainRouter.get("/",(req,res)=>{
        res.send("Welcome");
    })

module.exports = mainRouter;