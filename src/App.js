import React, { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";

import Customer from "./component/Customer.js";
import AdminHeader from "./component/AdminHeader";
import MainHeader from "./component/MainHeader";
import SelectProduct from "./component/SelectProduct";
import CheckOutProduct from "./component/CheckOutProduct";
import Template from "./component/Print/Template";
import AddItem from "./component/AddItem";
import Main from "./component/Main";

function App() {
  const [customer, setCustomer] = useState([]);
  const [selectid, setSelectid] = useState(null);
  const [checkoutPdt, setCheckoutPdt] = useState([]);
  // .............................................................................
  const onAdd = (product) => {
    const exist = checkoutPdt.find((x) => x.id === product.id);

    if (exist) {
      setCheckoutPdt(
        checkoutPdt.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCheckoutPdt([...checkoutPdt, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = checkoutPdt.find((x) => x.id === product.id);
    if (exist.qty === 0) {
      setCheckoutPdt(checkoutPdt.filter((x) => x.id !== product.id));
    } else {
      setCheckoutPdt(
        checkoutPdt.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  // ..............................................................

  return (
    <>
      <HashRouter>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/main">
          <MainHeader />
          <div>
            <Container maxWidth="sm">
              <Customer customer={customer} setCustomer={setCustomer} />
            </Container>
          </div>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="stretch"
            style={{ marginTop: "30px" }}
          >
            <Grid item xs={6}>
              <Container maxWidth="md">
                <SelectProduct setSelectid={setSelectid} />
              </Container>
            </Grid>
            <Grid item xs={6}>
              <Container maxWidth="md">
                <CheckOutProduct
                  selectid={selectid}
                  setSelectid={setSelectid}
                  checkoutPdt={checkoutPdt}
                  setCheckoutPdt={setCheckoutPdt}
                  onRemove={onRemove}
                  onAdd={onAdd}
                />
              </Container>
            </Grid>
          </Grid>
        </Route>
        <Route exact path="/addItem">
          <AdminHeader />
          <AddItem />
        </Route>
        <Route exact path="/print">
          <Template
            customer={customer}
            setCustomer={setCustomer}
            checkoutPdt={checkoutPdt}
            setCheckoutPdt={setCheckoutPdt}
          />
        </Route>
      </HashRouter>
    </>
  );
}

export default App;
