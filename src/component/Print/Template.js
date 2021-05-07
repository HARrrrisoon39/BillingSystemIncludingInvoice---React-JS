import React, { useRef, useState } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { ComponentToPrint } from "./ComponentToPrint";

function Template({ customer, setCustomer,setCheckoutPdt,checkoutPdt }) {
  let history = useHistory();
  const redirect = (e) => {
    history.push("/main");
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <Button
        style={{
          backgroundColor: "#F50057",
          color: "white",
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
        onClick={redirect}
      >
        Go Back
      </Button>
      <Button
        style={{
          backgroundColor: "#F50057",
          color: "white",
          position: "absolute",
          top: "70px",
          right: "10px",
        }}
        onClick={handlePrint}
      >
        Print this out!
      </Button>

      <ComponentToPrint
        ref={componentRef}
        customer={customer}
        setCustomer={setCustomer}
        checkoutPdt={checkoutPdt}
        setCheckoutPdt={setCheckoutPdt}
      />
    </>
  );
}

export default Template;
