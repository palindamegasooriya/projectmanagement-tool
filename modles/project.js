const mongoose = require('mongoose');
const schema = mongoose.Schema;

const projectSchema = new schema({

    projectname:{type:String,required:true},
    type:{type:String,required:true},
    description:{type:String,required:true},
    clientname:{type:String,required:true},
    pm:{type:String,required:true}
});

const Project = module.exports = mongoose.model("Project",projectSchema);

module.exports.saveProject = function (newProject,callback) {
    newProject.save(callback);
};