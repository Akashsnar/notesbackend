const mongoose = require('mongoose');

// const mongoURI = "mongodb://0.0.0.0:27017/inotebook"

const connectToMongo = async()=>{
    // console.log("chal na");
    // try {
    // mongoose.connect(mongoURI, ()=>{
    //     console.log("Connected to Mongo Successfully");
    // })


    mongoose.set('strictQuery', false);
        try {
            const uri = "mongodb+srv://aksn0204:K1M2XyNiTC54KDFB@cluster0.2knilcp.mongodb.net/notesdata";
            await mongoose.connect(uri);
            console.log("connected to mongodb");
        }
        catch (error) {
            console.log(error);
        }

}

module.exports = connectToMongo;
