import { User } from "../Models/users.js";

export const getUserById = async(request, response)=>{
    const {userId} = request.params;
    try{
        const user = await User.find({id:userId});
        return response.status(200).json({message:'Success', user: user});
    }catch(err){
        console.log(err);
        return response.status(500).json({message:'Server Error'});
    };
};