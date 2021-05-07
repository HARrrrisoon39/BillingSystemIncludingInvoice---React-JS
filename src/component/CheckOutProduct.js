import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const useStyles = makeStyles({
  h1: {
    backgroundColor: "#3F51B5",
    color: "white",
  },
  hiddenBlock: {
    visibility: "hidden",
  },
  table: {
    minWidth: 350,
  },
  Button: {
    width: "300px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10",
    marginBottom: "0",
    display: "block",
  },
  total: {
    display: "flex",
    flexDirection: "row",
    padding: "30px",
    textAlign: "center",
    color: "white",
    alignItems :"center",
    justifyContent : "center",
  },
});

function CheckOutProduct({
  selectid,
  setCheckoutPdt,
  checkoutPdt,
  onRemove,
  onAdd,
  setSelectid,
}) {
  const classes = useStyles();

  let history = useHistory();
  const redirect = () => {
    history.push("/print");
  };

  const addItem = JSON.parse(localStorage.getItem("addItem"));
  const itemsPrice = checkoutPdt.reduce((a, c) => a + c.qty * c.amount, 0);

  useEffect(() => {
    if (selectid) {
      const posts = addItem.find((o) => o.id === selectid);
      setCheckoutPdt([...checkoutPdt, posts]);
    }
  }, [selectid]);

  return (
    <>
      <div className={classes.h1}>
        <Typography align="center" variant="h4">
          INVOICE
        </Typography>
      </div>

      {checkoutPdt.length === 0 && <div>Empty</div>}

      {selectid ? (
        <Paper>
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              {checkoutPdt.length > 0 ? (
                <TableHead>
                  <TableRow>
                    <TableCell>Items</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Increment</TableCell>
                    <TableCell align="right">Decrement</TableCell>
                  </TableRow>
                </TableHead>
              ) : null}

              <TableBody>
                {checkoutPdt.map((check) => (
                  <>
                    <TableRow key={check.id}>
                      <TableCell component="th" scope="row">
                        {check.title}
                      </TableCell>
                      <TableCell align="right">
                        {parseInt(check.amount) * check.qty}
                      </TableCell>
                      <TableCell align="right">{check.qty}</TableCell>
                      <TableCell align="right">
                        <IconButton onClick={() => onAdd(check)}>
                          <AddCircleIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="right">
                        <IconButton onClick={() => onRemove(check)}>
                          <HighlightOffIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      ) : (
        setSelectid(null)
      )}

      {checkoutPdt.length > 0 ? (
        <>
          <div className={classes.total}>
            <Typography variant="h6">
              Total:
            </Typography>
            <Typography variant="h6" >
              ${itemsPrice}
            </Typography>
          </div>

          <Button
            variant="contained"
            color="secondary"
            className={classes.Button}
            onClick={redirect}
          >
            Go to Print
          </Button>
        </>
      ) : null}
    </>
  );
}

export default CheckOutProduct;
