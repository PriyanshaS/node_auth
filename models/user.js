const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
    },
    email:{
        required:true,
        type:String,
        trim:true,
        // validate :{

        // }
    },
    password:{
        required:true,
        type:String,
        trim:true
    },
    
});

const User = mongoose.model("User" , userSchema);
module.exports = User;