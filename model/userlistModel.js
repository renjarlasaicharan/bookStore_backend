import mongoose from "mongoose";

const userListSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
},{
    toJSON:{
        transform(doc,val){
            delete val.__v,
            delete val.createdAt,
            delete val.updatedAt
        }
    },
    timestamps: true
})


const user = mongoose.model('users', userListSchema)
export default user;