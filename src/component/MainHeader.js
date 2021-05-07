import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    borderRadius: "30px",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [state, setState] = useState(true);

  function toggle() {
    setState(!state);
  }

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Billing App
          </Typography>
          <Button onClick={toggle} href="/addItem" color="inherit">
            <Link to="/addItem" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                style={{ color: "white", fontSize: "30px" }}
              >
                Admin
              </Typography>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
