import user from '../model/userlistModel.js';


export const getUsers =async (req,res) => {
    try{
        const data =await user.find()
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
}


export const createUser = async (req,res) => {
try{
const {userName,email} = req.body;
const emailExists = await user.findOne({email})
if(emailExists !== null){
    return res.status(400).json({message: "Email Id already existed"})
}
const newUser = await user.create({
    userName: userName,
    email: email
})
return res.status(201).json(newUser)
}
catch(err){
    console.log(err.message)
    res.status(500).send({message:err.message})
}
}


export const updateUser = async(req,res) => {
    try{ 
        const id = req.params.id;
        const updateduser =  await user.findByIdAndUpdate(id,req.body);

        if(updateduser === null){
            return res.status(400).json({message:" id not found"})
           }
           else{
            const updatedUser = await user.findOne({_id:id})
            return res.status(200).json(updatedUser)
           }
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
};



export const deleteUser =async (req,res) => {
    try {
        const {id} = req.params
       const result = await user.findByIdAndDelete({_id: id})
       if(result === null){
        return res.status(400).json({message:" id not found"})
       }
       else{
        return res.status(202).json({message:" Deleted successfully"})
       }
    } catch (error) {
        res.status(500).send({message:error.message})
    }
}

