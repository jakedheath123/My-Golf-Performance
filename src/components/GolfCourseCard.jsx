import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import SportsGolfIcon from '@material-ui/icons/SportsGolf';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const GolfCourseCard = ({course}) => {
  const classes = useStyles();
  const {address, coursePar, email, id, images, name, scoreCard, telephone, totalYardsWhite, totalYardsYellow} = course;

  return (
    <Grid item >
      
    <Card className={classes.root}>
    <CardHeader
      //title={name}
      subheader={name}
    />
    {images.map((image) => (
      <CardMedia
      key={image}
      className={classes.media}
      image={image}
    />
    ))}
    
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        {address}
      </Typography>
      <PhoneIcon/>
      <Typography variant="body2" color="textSecondary" component="p">
{telephone}
      </Typography>
      <EmailIcon/>
      <Typography variant="body2" color="textSecondary" component="p">
        {email}
      </Typography>
    </CardContent>
    <CardActions className={classes.cardActions}>
    <GolfCourseIcon style={{color: "green"}}/>
    <Typography variant="body2" color="textSecondary" component="p">
    {coursePar}
      </Typography>
      <SportsGolfIcon style={{color: "yellow"}} />
      <Typography variant="body2" color="textSecondary" component="p">
      {totalYardsYellow}
      </Typography> 
      <SportsGolfIcon />     
      <Typography variant="body2" color="textSecondary" component="p">
      {totalYardsWhite}
      </Typography>  
     
     
    </CardActions>
    
    <Button variant="contained" className={classes.button} >
Select
</Button>
    

   
  </Card>
  </Grid>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: "100%",
    },
    media: {
      paddingTop: '50%'
    },
    cardActions: {
      justifyContent: "center"
    },
    button: {
      backgroundColor: "blue",
      color: "white",
      margin: "0.5em"
    }
  })  
);

export default GolfCourseCard;






