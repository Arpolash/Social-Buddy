import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const PostDetails = (props) => {
  const classes = useStyles();

    const {title,body,id} = props.post;
   
      return (
        <Card className={classes.root} style={{margin:'20px',height:'250px'}}>
        <CardActionArea style={{backgroundColor:'#f3e5f5'}}>
          <CardContent>
            <Typography style={{textTransform:'uppercase',marginBottom:'5px'}}>
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Like
          </Button>
          <NavLink to={`${id}`}><Button size="small" style={{color:'green'}}>
            Learn More
          </Button></NavLink>
        </CardActions>
      </Card>
      );
      }
export default PostDetails;