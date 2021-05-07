import React, { useEffect} from "react";
import * as api from "../api";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {
  CardContent,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: "10px",
    minWidth: 275,
    textAlign: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

function Customer({customer,setCustomer}) {
  // const [customer, setCustomer] = useState([]);
  const classes = useStyles();

  const fetch = async () => {
    try {
      const { data } = await api.fetchPosts();
      const data1 = data.results[0];
      console.log(data1);
      setCustomer(data1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Customer Detail
          </Typography>
          <Typography variant="h5" component="h2">
            Harry R
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {customer.gender}
          </Typography>
          <Typography variant="body2" component="p">
            {customer.email}
            <br />
            {customer.phone}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default Customer;
