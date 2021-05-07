import React from "react";
import { Button} from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Main() {
  let history = useHistory();
  const redirect = () => {
    history.push("/main");
  };
  const mystyle = {
    marginLeft: " 25%",
    width: "50%",
    marginRight: "25%",
    marginTop : "25%"
  };

  return (
    <>
      <Button style={mystyle} onClick={redirect} variant="contained">
        Go TO MAIN PAGE
      </Button>
    </>
  );
}

export default Main;
