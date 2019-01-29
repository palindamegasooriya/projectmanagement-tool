const mongoose = require('mongoose');
const schema = mongoose.Schema;

const empproSchema = new schema({

    projectname:{type:String,required:true},
    email :{type:String,required:true}
    });

    const Emppro = module.exports = mongoose.model("Emppro",empproSchema);

    module.exports.saveEmppro = function (newEmppro,callback) {
        newEmppro.save(callback);
    };
