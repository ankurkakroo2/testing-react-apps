import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AccountCircle, Menu as MenuIcon } from "@material-ui/icons";

import {
  AppBar,
  Menu,
  MenuItem,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";

import { getUser, removeUserSession } from "../../util/Common";
import PlaceHolder from "./Placeholder";
import "./default.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Dashboard = props => {
  const classes = useStyles();
  const user = getUser();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  return (
    <section className="dashboard">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Dashboard
          </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              <AccountCircle fontSize="large" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => {}}>Signed in as: {user}</MenuItem>
              <MenuItem onClick={() => {}}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      {/* <div className="dashboard__header">
        <div className="dashboard__header__profile-section">
          <div className="dashboard__header__profile-icon"></div>
          <input
            className="dashboard__logout-btn"
            type="button"
            onClick={handleLogout}
            value="Logout"
          />
        </div>
      </div> */}
      <PlaceHolder />
    </section>
  );
};

export default Dashboard;
