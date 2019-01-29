const express = require('express');
const router = express.Router();
const Project = require('../modles/project');
const Task = require('../modles/task');
const config = require('../config/database');
var nodemailer = require('nodemailer');

router.get('/viewproject', async(req, res) => {
    const view = await Project.find();
    res.send(view);
     });

     router.get('/viewtask', async(req, res) => {
        const task = await Task.find({projectname: req.body.projectname});
        res.send(task);
             }); module.exports = router;