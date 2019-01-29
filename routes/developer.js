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
             });



             router.post('/status',function (req,res){
           
                Task.updateOne({$and:[{"taskname":req.body.taskname},{"projectname":req.body.projectname}]},{$set:{status:req.body.status}},function(err, doc){
                    if(err){
                        console.log("Something wrong when updating data!");
                    }
                
                    console.log(doc);
                });

             });

             router.get('/time',function(req,res){
                firstDate = new Date("7/13/2016"),
                secondDate = new Date("09/15/2017"),
                timeDifference = Math.abs(secondDate.getTime() - firstDate.getTime());
                let differentDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
                res.json({msg:differentDays+' days'});

             });

             router.get('/visualize',function(req,res){
                let all=Task.find({projectname:req.body.projectname}).count();
                console.log(all);
            });

             module.exports = router;