import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AccountCircle } from "@material-ui/icons";

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
              data-testid="account-icon-button"
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
              data-testid="account-menu"
              id="account-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                data-testid="menu-item-username"
                id="menu-item-username"
                onClick={() => {}}
              >
                Signed in as: {user}
              </MenuItem>
              <MenuItem
                data-testid="menu-item-profile"
                id="menu-item-profile"
                onClick={() => {}}
              >
                Profile
              </MenuItem>
              <MenuItem
                data-testid="menu-item-logout"
                id="menu-item-logout"
                onClick={handleLogout}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <PlaceHolder />
    </section>
  );
};

export default Dashboard;
