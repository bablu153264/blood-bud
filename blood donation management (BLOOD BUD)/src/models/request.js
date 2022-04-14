const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://ankit123:898686@cluster0.y60mi.mongodb.net/Blood_Bank?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const requestSchema = new mongoose.Schema({
   
    userId:{
        type:String,
        required:true
    },
    userName:{
       type:String,
       required:true
    },
    blood_bank:{
        type:String,
        required:true
    },
    blood_type:{
        type:String,
        required:true
    },
    requestStatus:{
        type:String,
        default:"Not Approved",
        required:true
    },
    
},{timestamps:true})
const Request = new mongoose.model('Request',requestSchema)
module.exports = Request