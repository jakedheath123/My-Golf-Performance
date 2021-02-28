import React, { FunctionComponent, useState} from 'react';
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

import ConfirmModal from './ConfirmModal';
import ModalContent from "./ModalContent";

type GolfCourseCarsProps = {
  course: {address: string; coursePar: number; email: string; id: string; images: string[]; name: string; scoreCard: {}[]; telephone: string; totalYardsWhite: number; totalYardsYellow: number;}
}

const GolfCourseCard: FunctionComponent<GolfCourseCarsProps> = ({course}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const {address, coursePar, email, id, images, name, scoreCard, telephone, totalYardsWhite, totalYardsYellow} = course;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item >
    <Card className={classes.root}>
    <CardHeader
      title={name}
      className={classes.cardText}
    />
    {images.map((image) => (
      <CardMedia
      key={image}
      className={classes.media}
      image={image}
    />
    ))}
    
    <CardContent className={classes.cardText}>
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
    <div className={classes.selectButton}>
    <Button variant="contained" className={classes.button} onClick={handleOpen}>
Select
</Button>
    </div>
  </Card>
  <ConfirmModal open={open} handleClose={handleClose}>
    <ModalContent id={id} name={name}/>
  </ConfirmModal>
  </Grid>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    selectButton: {
      display: "flex",
      justifyContent: "center"
    },
    cardText: {
      textAlign: "center"
    },
    root: {
      maxWidth: "100%",
      marginTop: "2em",
      marginBottom: "1em"
    },
    media: {
      paddingTop: '50%',
      height: "100%",
      width: "500px"
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






