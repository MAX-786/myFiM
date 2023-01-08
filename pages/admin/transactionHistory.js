import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Table from "components/Table/Table.js";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

function TransactionHistory() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>History</h4>
            </CardHeader>
            <CardBody>
              <Table
              tableHeaderColor="primary"
              tableHead={["Transaction ID", "Company Name", "Amount", "Other Charges","Time and Date"]}
              tableData={[
                ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738",""],
                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789",""],
                ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142",""],
              ]}
            />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

TransactionHistory.layout = Admin;

export default TransactionHistory;