import React from "react";
import styles from "./mystyle.module.css";

import {
  Container,
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
  Typography,
} from "@material-ui/core";

import { Col, Divider, Row } from "antd";

export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <Container maxWidth="sm">
        <Paper>
          <div style={{ padding: 20 }}>
            <Col>
              <Row>
                <Divider>Invoice</Divider>
              </Row>
            </Col>

            <Row gutter={24} style={{ marginTop: 32 }}>
              <Col span={8}>
                <h3>Eco Haya</h3>
                <div>#944/945, 4th Cross, 9th Main,</div>
                <div>Vijaya Bank Layout,</div>
                <div>Bannerghatta Road,</div>
                <div>Bangalore - 560076</div>
              </Col>
              <Col span={8} offset={8}>
                <table>
                  <tr>
                    <th>Invoice # :</th>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th>Invoice Date :</th>
                    <td>10-01-2018</td>
                  </tr>
                  <tr>
                    <th>Due Date :</th>
                    <td>10-01-2018</td>
                  </tr>
                </table>
              </Col>
            </Row>

            <div className={styles.bigblue}>
              <div>
                Bill To: <strong>Harry R</strong>
              </div>
              <div>{this.props.customer.gender}</div>
              <div>{this.props.customer.email}</div>
              <div>{this.props.customer.cell}</div>
            </div>
          </div>

          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Item Name</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.checkoutPdt.map((row) => (
                  <TableRow key={row.title}>
                    <TableCell component="th" scope="row">
                      {row.title}
                    </TableCell>
                    <TableCell align="right">{row.qty}</TableCell>
                    <TableCell align="right">
                      {parseInt(row.amount) * row.qty}
                    </TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div className={styles.total}>
            <h1>
              Total:
            </h1>
            <h1 style={{paddingLeft : "30px"}}>
              ${this.props.checkoutPdt.reduce((a, c) => a + c.qty * c.amount, 0)}
            </h1>
          </div>
        </Paper>
      </Container>
    );
  }
}
