import { response } from "express";
import { User } from "../Models/users.js";

export const addNewUser = async(request, response)=>{
    const {newUser} = request.body;
    try{
        const userExists = await User.findOne({username:newUser.username});

        if (!userExists){
            const newUsers = new User(newUser);
            await newUsers.save();
            return response.status(201).json({message:'New user created'});
        }else{
            return response.status(400).json({message:'User with this username already exists'});
        }
    }catch(err){
        console.log(err);
        return response.status(500).json({message:'Server error'});
    };
};