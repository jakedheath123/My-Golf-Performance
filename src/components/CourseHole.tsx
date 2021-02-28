import React, { FunctionComponent, useEffect, useState } from 'react';
import { RouteComponentProps } from "@reach/router";
import { useSelector } from "react-redux"
import Button from '@material-ui/core/Button';
import { navigate } from "@reach/router"

interface IProps extends RouteComponentProps {
  courseId?: string;
  hole?: number
}

const CourseHole: FunctionComponent<IProps> = ({}) => {
  const { selectedCourse: { id } } = useSelector(state => state.golfCourses);
  const [hole, setHole] = useState(1)

  useEffect(() => {
    hole > 18 ? navigate(`/user-pages/round-summary`) : navigate(`/user-pages/course/${id}/${hole}`)
  }, [hole])


  const handleClick = () => {
    setHole(currentHole => currentHole + 1)
  }

  return (
    <div>
      <h1>Course hole {hole}</h1>
      <Button variant="contained" color="secondary" onClick={handleClick}>
        Next Hole ({hole + 1})
      </Button>
    </div>
  );
};

export default CourseHole;