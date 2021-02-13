import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from "@reach/router" 

import NavBar from "./NavBar"

interface UserPagesProps extends RouteComponentProps  {
  url?: string
}

const UserPages: FunctionComponent<UserPagesProps> = (props) => (
  <>
   <div>{props.children}</div>
   <NavBar/> 
  </>
)

export default UserPages;