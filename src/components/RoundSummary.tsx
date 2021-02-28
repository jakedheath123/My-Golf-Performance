import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from "@reach/router";

interface IProps extends RouteComponentProps {
  userId?: string;
}

const RoundSummary: FunctionComponent<IProps> = () => {
  return (
    <div>
      <h1>ROUND SUMMARY</h1>
    </div>
  );
};

export default RoundSummary;