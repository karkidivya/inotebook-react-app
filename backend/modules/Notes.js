const mongoose = reqiure('mongoose')

const NotesSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    desctiption:{
        type:String,
        required: true,
     
    },
    tag:{
        type:String,
       default: "general"
    },
    date:{
        type:Date,
        default: Date.now
    }

})
module.exports= mongoose.model('notes',NotesSchema);