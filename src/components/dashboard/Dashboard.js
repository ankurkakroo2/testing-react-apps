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
              id="account-icon-button"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="account-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem id="menu-item-username" onClick={() => {}}>
                Signed in as: {user}
              </MenuItem>
              <MenuItem id="menu-item-profile" onClick={() => {}}>
                Profile
              </MenuItem>
              <MenuItem id="menu-item-logout" onClick={handleLogout}>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <PlaceHolder count={6}/>
    </section>
  );
};

export default Dashboard;
