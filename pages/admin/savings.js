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
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

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

function Savings() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardBody>
            <h4 className={classes.cardTitle}>Anonymous</h4>
            <p className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac ante sed elit
               feugiat ullamcorper. Nulla lectus libero, malesuada sed ipsum malesuada, sagittis 
               pulvinar elit.
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardBody>
              <h4 className={classes.cardTitle}>Anonymous</h4>
              <p className={classes.description}>sem euismod commodo. Sed fermentum blandit 
               lorem, eget aliquet ligula gravida lobortis. Fusce vel mauris metus.
                Vestibulum condimentum odio vitae condimentum molestie.
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardBody>
              <h4 className={classes.cardTitle}>Anonymous</h4>
              <p className={classes.description}>sem euismod commodo. Sed fermentum blandit 
               lorem, eget aliquet ligula gravida lobortis. Fusce vel mauris metus.
                Vestibulum condimentum odio vitae condimentum molestie.
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}><Card>
            <CardBody>
              <h4 className={classes.cardTitle}>Anonymous</h4>
              <p className={classes.description}>sem euismod commodo. Sed fermentum blandit 
               lorem, eget aliquet ligula gravida lobortis. Fusce vel mauris metus.
                Vestibulum condimentum odio vitae condimentum molestie.
              </p>
            </CardBody>
          </Card></GridItem>
        <GridItem xs={12} sm={12} md={6}><Card>
            <CardBody>
              <h4 className={classes.cardTitle}>Anonymous</h4>
              <p className={classes.description}>sem euismod commodo. Sed fermentum blandit 
               lorem, eget aliquet ligula gravida lobortis. Fusce vel mauris metus.
                Vestibulum condimentum odio vitae condimentum molestie.
              </p>
            </CardBody>
          </Card></GridItem>
      </GridContainer>
    </div>
  );
}

Savings.layout = Admin;

export default Savings;