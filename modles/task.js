const mongoose = require('mongoose');
const bcrypt  = require('bcryptjs');
const schema = mongoose.Schema;


const taskSchema = new schema({

   projectname:{type:String,required:true},
   taskname:{type:String,required:true},
   employee:{type:String},
   enddate:{type:Date},
   status:{type:Boolean}

});

const Task = module.exports = mongoose.model("Task",taskSchema);

module.exports.saveTask = function (newTask,callback) {
    newTask.save(callback);
};

module.exports.saveStatus=function(newStatus,callback){
    newStatus.save(callback);
};