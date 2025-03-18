import { User } from "../Models/users.js";

export const deleteUserById = async(req, res)=>{
    const {userId} = req.params;
    console.log(userId)
    try{
        await User.findByIdAndDelete(userId);
        return res.status(200).json({message:'User deleted'});
    }catch(err){
        console.log(err);
        return res.status(500).json({message:'Server Error'});
    }
}

export const deleteAllUsers = async(request, response)=>{
    try{
        await User.deleteMany({});
        return response.status(200).json({message:'Deleted all users'});
    }catch(err){
        console.log(err);
        return response.status(500).json({message:'Server Error'});
    }
}