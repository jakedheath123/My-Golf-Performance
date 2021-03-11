import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from "@reach/router" 
import { useSelector } from "react-redux";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import NavBar from "./NavBar"
import SideBar from "./SideBar"

interface UserPagesContainerProps extends RouteComponentProps  {
  url?: string
}

const UserPagesContainer: FunctionComponent<UserPagesContainerProps> = (props) => (
  <>
   <NavBar/>
   <div style={{position: "relative"}}>
     <Grid container direction="column" className="user-pages">
      <Grid item>
        {props.children}
      </Grid>
     </Grid>
     <SideBar />
   </div> 
  </>
)



export default UserPagesContainer;