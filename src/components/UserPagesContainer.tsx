import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from "@reach/router" 

import NavBar from "./NavBar"

interface UserPagesContainerProps extends RouteComponentProps  {
  url?: string
}

const UserPagesContainer: FunctionComponent<UserPagesContainerProps> = (props) => (
  <>
   <div>{props.children}</div>
   <NavBar/> 
  </>
)

export default UserPagesContainer;