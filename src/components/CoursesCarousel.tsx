import React, { useState } from 'react';
import { makeStyles, Theme, useTheme, createStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import ConfirmModal from "./ConfirmModal";
import ModalContent from "./ModalContent";

const CoursesCarousel = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const { golfCourseList } = useSelector(state => state.golfCourses);
  const selectedCourse = golfCourseList[activeStep];
  const maxSteps = golfCourseList.length;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Grid container justify="center" direction="column" alignItems="center" className={classes.root}>
      <Grid item className={classes.item}>
      <Paper square elevation={0} className={classes.header}>
        <Typography >{golfCourseList[activeStep].name}</Typography>
      </Paper>
      <img
        className={classes.img}
        src={golfCourseList[activeStep].images[0]}
        alt={golfCourseList[activeStep].name}
      />
      <MobileStepper
        className={classes.stepper}
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
      </Grid>
      <Grid item>
      <Button variant="contained" className={classes.button} onClick={handleOpen}>
            Select
        </Button>
      </Grid>
      <ConfirmModal open={open} handleClose={handleClose}>
        <ModalContent id={selectedCourse.id} name={selectedCourse.name}/>
      </ConfirmModal>
    </Grid>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      top: "50%",
      left: "50%",
      position: "absolute",
      transform: "translate(-50%, -50%)"
    },
    item: {
      minWidth: "800px"
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      textAlign: "center",
      justifyContent: "center",
      height: 50,
      paddingLeft: theme.spacing(4),
      background: "none"
    },
    img: {
      height: "500px",
      maxWidth: "800px",
      overflow: 'hidden',
      display: 'block',
      width: '100%',
      borderRadius: "10px",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
    },
    button: {
      backgroundColor: "blue",
      color: "white",
      margin: "0.5em"
    },
    stepper: {
      background: "none"
    }
  }),
);

export default CoursesCarousel;