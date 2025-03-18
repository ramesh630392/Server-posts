import { Comments } from "../Models/comments.js";
import axios from "axios";

export const fetchComments = async() =>{
    try{
        const response = await axios('https://jsonplaceholder.typicode.com/comments');
        for (let i of response.data){
            const existingComment = await Comments.findOne({id:i.id});
            if (!existingComment){
                const newComment = new Comments(i);
                await newComment.save();
            };
        };
    }catch(err){
        console.log(err);
    };
};