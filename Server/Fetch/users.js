import axios from "axios";
import { User } from "../Models/users.js";

export const fetchUsers = async() =>{
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        for (let i of response.data){
            const existingUser = await User.findOne({username:i.username});
            if (!existingUser){
                const newUser = new User(i);
                await newUser.save();
            }
        }
    }catch(err){
        console.log(err);
    }
};