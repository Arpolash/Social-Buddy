import React from 'react';
import { Grid } from '@material-ui/core';


const Comments = (props) => {
    const {name,email,body} = props.comment;
  
    const commentStyle={
        background:'white',
        color:'black',
        margin:'20px',
        borderRadius:'50px',
        padding:'20px'
    }
    
    return (
       <Grid container display="flex" style={commentStyle}>
            <Grid lg={4}>
                 <img style={{width:'150px'}} src={`https://joeschmoe.io/api/v1/${name}`} alt="avatar" />
            </Grid>
            <Grid lg={8}>
                <h3 style={{textTransform:'capitalize'}}>{name}</h3>
                <p>{email}</p>
                <p>{body}</p>
            </Grid>
            
    </Grid>
    );
};

export default Comments;