import mongoose from "mongoose";

const empSchema = mongoose.Schema({
    name: {
        type: String,

    },

    mob: {
        type: Number,
     
    },

    email: {
        type: String,
       
    },

    age: {
        type: Number,
      
    },
    profile: {
        type: String,
       
    }

})

const empModel = new mongoose.model('studentData', empSchema)

export default empModel