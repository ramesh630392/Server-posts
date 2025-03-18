import express from 'express';
import { connectDb } from './Config/db.js';
import { fetchUsers } from './Fetch/users.js';
import { fetchPosts } from './Fetch/posts.js';
import { fetchComments } from './Fetch/comments.js';
import usersRouter from './Routes/users_api.js'

const app = express();
app.use(express.json());

app.get('/', (req, res)=>{
    fetchUsers();
    fetchPosts();
    fetchComments();
    res.status(200).json('done');
});

app.use('/users', usersRouter);

app.listen(3000, ()=>{
    console.log("server Running at port number 3000");
    connectDb();
})

export default app;