import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import './PostMoreDetails.css'
import Comments from '../Comments/Comments';


const MoreDetails = () => {
    const {id} = useParams();
   
    const [post,setPost] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[]);

    const [comment,setComment] = useState([])
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setComment(data))
    },[]);
  
    return (
        <Grid container
        direction="row"
        justify="center"
        alignItems="center">
            <div className="detailsStyle">
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              <h3>Comment: {comment.length}</h3>
                <hr/>
              {
                  comment.map(comment => <Comments comment={comment}></Comments>)
              }
              <Link to="/post"><button className="goBackButton">Go Back</button></Link>
            </div>
        </Grid>
    );
};

export default MoreDetails;