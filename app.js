const express=require('express');
const app=express();
const path=require('path');
app.use(express.static(path.join(__dirname,"public")));
const user=require('./routes/users');
const project=require('./routes/projectmanager');
const developer=require('./routes/developer');
const architecture=require('./routes/architecture');
const accountant=require('./routes/accountant')
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const passport = require('passport');
const jwt = require('jsonwebtoken');
var fs = require('fs');
var multer = require('multer');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);





const connection=mongoose.connect('mongodb://localhost:27017/pali');
if(connection){
    console.log('database connected')
}
else{
    console.log('database not connected')
}

app.get("/",(req,res)=>{
   res.send("<h1>hello world</h1>");
});

app.use('/user',user);
app.use('/project',project);
app.use('/developer',developer);
app.use('/architecture',architecture);
app.use('/accountant',accountant);
app.use('/deleteproject',project);


/*var Item = new ItemSchema(
    { img: 
        { data: Buffer, contentType: String }
    }
  );
  var Item = mongoose.model('Clothes',ItemSchema);

  app.use(multer({ dest: './uploads/',
    rename: function (fieldname, filename) {
      return filename;
    },
   }));



   app.post('/api/photo',function(req,res){
    var newItem = new Item();
    newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
    newItem.img.contentType = 'image/png';
    newItem.save();
   });

*/
app.listen(4000,()=>{
console.log("listen to port 3000");
});  