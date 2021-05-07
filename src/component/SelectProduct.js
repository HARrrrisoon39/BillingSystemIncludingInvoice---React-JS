import React, { useState } from "react";
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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles({
  table: {
    minWidth: 250,
  },
  hiddenBlock: {
    visibility: "hidden",
  },
});

function SelectProduct({ setSelectid }) {
  const saveditems = JSON.parse(localStorage.getItem("addItem"));
  const [selectItem, setSelectItem] = useState(saveditems || []);

  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md">
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
                <TableCell align="right">Add</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectItem.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => setSelectid(row.id)}>
                      <AddIcon />
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

export default SelectProduct;
