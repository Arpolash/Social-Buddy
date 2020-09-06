import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import PostDetails from '../PostDetails/PostDetails';
import { Grid } from '@material-ui/core';

const Post = () => {
    const [post,setPost] = useState([]);
    console.log(post)
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    return (
        <Grid  container
        direction="row"
        justify="center"
        alignItems="center">
            {
            post.map(post => <PostDetails post={post}></PostDetails>)
            }
        </Grid>
    );
};

export default Post;