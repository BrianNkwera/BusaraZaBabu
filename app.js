const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");


const app = express();
mongoose.connect("mongodb://localhost:27017/busaraZaBabuDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const messageSchema = new mongoose.Schema({
  message: String,
});

const startupSchema = new mongoose.Schema({
  babu: String,
  geofResponse: String,
});


const Message = mongoose.model("Message", messageSchema);
const Startup = mongoose.model("Startup", startupSchema);


app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req,res) {
  const messageValue = 'Mwanagenzi<br>"Mpishi husingizia moto, ikiwa chakula hakijaiva"';
  const message = new Message({
    message: messageValue, 
  });

  Message.exists({ message: messageValue }, function(err,found){
    if(err){
      console.log(err);
    }else{
      if(found){
        console.log("mesaage already exists");
      }else{
        message.save();
      }
    }
  });
  
    
    res.render("index", {message: messageValue});
})


app.listen(3000, function(){
    console.log("server started");
})