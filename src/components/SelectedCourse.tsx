import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from "@reach/router" 
import { useSelector } from "react-redux"
import Button from '@material-ui/core/Button';
import { navigate } from "@reach/router"

interface IProps extends RouteComponentProps {
  courseId?: string;
}

const SelectedCourse: FunctionComponent<IProps> = () => {
  const { selectedCourse: {id} } = useSelector(state => state.golfCourses)
  
  const handleClick = () => {
    navigate(`/user-pages/course/${id}/1`)
  }

  return (
    <div>
      <h1>Course Scorecard and info</h1>
      <Button variant="contained" color="secondary" onClick={handleClick}>
        Hole 1
      </Button>
    </div>
  );
};

export default SelectedCourse;