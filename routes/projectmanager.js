const express = require('express');
const router = express.Router();
const Project = require('../modles/project');
const Emppro = require('../modles/emppro');
const Task = require('../modles/task');
const config = require('../config/database');
var nodemailer = require('nodemailer'); 



router.post("/createPro",function (req,res){

    const newProject = new Project({

        projectname:req.body.projectname,
        type:req.body.type,
        description:req.body.description,
        clientname:req.body.clientname,
        pm:req.body.pm
        });

        const newEmppro=new Emppro({
            projectname:req.body.projectname,
            email:req.body.email
        });

        console.log(newProject);
        console.log(newEmppro);
     Project.saveProject(newProject,function (err,project) {
            if(err){
                res.json({state:false,msg:"projet data not inserted"});
            }
            if(project){
                res.json({state:true,msg:"project data  inserted"});
            }
        });
            Emppro.saveEmppro(newEmppro,function(err,emppro){
             /*   if(err){
                    res.json({state:false,msg:"emppro data not inserted"});
                }
                if(emppro){
                    res.json({state:true,msg:"emppro data  inserted"});
                }*/
            });

            

       
        });


        router.post("/addtask",function (req,res){

            const newTask = new Task({
                projectname:req.body.projectname,
                taskname:req.body.taskname,
                employee:req.body.employee,
                enddate:req.body.enddate,
                status:req.body.status
                });
        
                console.log(newTask);
               Task.saveTask(newTask,function (err,task) {
                    if(err){
                        res.json({state:false,msg:"data not inserted"});
                    }
                    if(task){
                        res.json({state:true,msg:"data  inserted"});
                    }
                });

                
                });

               
                
                

                router.get('/viewproject', async(req, res) => {
                    const project = await Project.find({pm:req.body.pm});
                    res.send(project);
                    });

                        
                router.get('/viewtask', async(req, res) => {
                    const task = await Task.find({projectname: req.body.projectname});
                    res.send(task);
                         });

                         router.delete('/deleteproject',function(req,res){
                            Project.findOne({projectname: req.body.projectname}, function (error, person){
                                console.log("This object will get deleted " + person);
                                person.remove();
                        res.send(person);
                            });
                           
                       });


                       router.delete('/deletetask',function(req,res){
                        Task.findOne({$and:[{projectname:req.body.projectname},{taskname:req.body.taskname}]}, function (error, person){
                            console.log("This object will get deleted " + person);
                            person.remove();
                    res.send(person);
                        });
                       
                   });


                   router.get('/visualize',function(req,res){
                    Task.find({projectname:req.body.projectname}).count(function (err, res) {
                        if (err)
                           throw err;
                           let p=res;
                       // console.log(p);
                        
                       let e= Task.find({"projectname": "ss"}).count();
                       console.log(e);
                       
                    });
                   
                   /* Task.find({status:req.body.status}).count(function (err, res) {
                        if (err)
                           throw err;
                        console.log(res);
                       // res.json(res);
                       
                    });*/
                });
    
             
    module.exports = router;