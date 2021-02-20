import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from "@reach/router" 

import NavBar from "./NavBar"

interface UserPagesContainerProps extends RouteComponentProps  {
  url?: string
}

const UserPagesContainer: FunctionComponent<UserPagesContainerProps> = (props) => (
  <>
   <NavBar/> 
   <div className="user-pages">{props.children}</div>
  </>
)

export default UserPagesContainer;