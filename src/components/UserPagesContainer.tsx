import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from "@reach/router" 
import Grid from '@material-ui/core/Grid';

import NavBar from "./NavBar"

interface UserPagesContainerProps extends RouteComponentProps  {
  url?: string
}

const UserPagesContainer: FunctionComponent<UserPagesContainerProps> = (props) => (
  <>
   <NavBar/> 
   <Grid container alignItems="center" justify="center" direction="column" className="user-pages">
     <Grid item>
      {props.children}
     </Grid>
   </Grid>
  </>
)



export default UserPagesContainer;