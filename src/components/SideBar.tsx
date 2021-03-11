import React, { FunctionComponent} from 'react';
import { useSelector } from "react-redux";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TableChartIcon from '@material-ui/icons/TableChart';
import Typography from '@material-ui/core/Typography';

const SideBar: FunctionComponent = () => {
  const { menuClicked } = useSelector(state => state.userInterface);

  return (
    <Grid className={`sidebar ${menuClicked && "sidebar--transition-active"}`}>
      <Grid className="sidebar__container">
          <Button disableTouchRipple className="sidebar__container__button-link">
            <div className="sidebar__container__button-link__details">
              <TableChartIcon />
              <Typography variant="subtitle1">
                Leaderboard
              </Typography>
            </div>
          </Button>
      </Grid>
    </Grid>
  );
};

export default SideBar;