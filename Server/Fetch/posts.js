import mongoose from "mongoose";
import axios from "axios";
import { Posts } from "../Models/posts.js";

export const fetchPosts = async()=>{
    try{
        const response = await axios('https://jsonplaceholder.typicode.com/posts');
        for (let i  of response.data){
            const existingPost = await Posts.findOne({id:i.id});
            if (!existingPost){
                const newPost = new Posts(i);
                await newPost.save();
            };
        };

    }catch(err){
        console.log(err)
    };
};