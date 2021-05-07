import React, { useEffect, useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  hiddenBlock: {
    visibility: "hidden",
  },
});

function AddItem() {
  const saveditems = JSON.parse(localStorage.getItem("addItem"));
  const [addItem, setAddItem] = useState(saveditems || []);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const classes = useStyles();

  useEffect(() => {
    localStorage.setItem("addItem", JSON.stringify(addItem));
  }, [addItem]);

  const submitHandler = (e) => {
    e.preventDefault();
    setAddItem([
      ...addItem,
      { title: title, amount: amount, id: Math.random(),qty : 1},
    ]);
    setTitle("");
    setAmount("");
  };

  return (
    <>
      <Container
        maxWidth="md"
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "10px",
          }}
        >
          <InputLabel
            htmlFor="my-input"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              color: "white",
            }}
          >
            Item Name
          </InputLabel>
          <input
            style={{ textTransform: "uppercase" }}
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value.toLocaleUpperCase())}
          />
          <InputLabel
            htmlFor="my-input"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              color: "white",
            }}
          >
            Amount
          </InputLabel>
          <input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
          <div style={{paddingLeft:"10px"}}>
            <Button
              style={{ color: "white" }}
              variant="contained"
              color="primary"
              onClick={submitHandler}
              className="todo-button"
              type="submit"
            >
              Add
            </Button>
          </div>
        </form>
      </Container>

      <Container maxWidth="md" style={{ marginTop: "10px" }}>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Items</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {addItem.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() =>
                        setAddItem(addItem.filter((el) => el.id !== row.id))
                      }
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default AddItem;
