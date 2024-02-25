const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const PORT = process.env.PORT || 3000;
const db = "mongodb+srv://priyansha:test123@cluster0.l3beipv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(db).then(() =>{
    console.log("Connection Successful");
}).catch((e)=>{
    console.log(e);
});
const app = express();

app.use(express.json());
app.use(authRouter);
app.listen(PORT , "0.0.0.0" , () => {
    console.log(`connected to port ${PORT}`);
});