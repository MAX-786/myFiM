import React, { useEffect } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import SavingsIcon from "@mui/icons-material/Savings";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { useState } from "react";
import { ButtonGroup, Button } from "@material-ui/core";

// import Button from "components/CustomButtons/Button.js";

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";

import { initiateConsents, checkStatus, getData } from "Data/index.js";
import { useSelector, useDispatch } from "react-redux";
import { setUserId, incrementByAmount } from "Data/userSlice.js";
import router from "next/router";
function Dashboard() {
  const useStyles = makeStyles(styles);
  const [isVisibleMonth, setIsVisibleMonth] = useState(true);
  const classes = useStyles();
  const userIds = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();
  console.log(userIds?.Account?.Summary?.currentValue);
  // useEffect(() => {

  //   userIds ? router.push(window.location.pathname): router.push('/');

  //   console.log(window.location.pathname);
  // },[]);

  const [startDate, setStartDate] = useState("");
  let data = null;
  const handleGetData = async () => {
    const pro = new Promise(() => getData());
    pro.then((data) => {

      setStartDate(data[0][0]?.Account?.Transactions?.startDate);
      console.log(data);
      if (data[0] !== undefined){
        console.log(data);
      }
    })
  };

  console.log(startDate);
  return (
    <div>
      {/* =======
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="dark" stats icon>
              <CardIcon color="dark">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                UserID: {`${userIds?.referenceId}`}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <Button
              onClick={() => {
                const data = initiateConsents();
                dispatch(setUserId(data));
              }}>
              Initiate Consents
            </Button>
          </Card>
          <Card>
            <Button
              onClick={() => {
                checkStatus();
              }}>
              Check Status
            </Button>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
>>>>>>> main */}
      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <Button
              onClick={() => {
                initiateConsents();
              }}>
              Initiate Consents
            </Button>
          </Card>
          <Card>
            <Button
              onClick={() => {
                checkStatus();
              }}>
              Check Status
            </Button>
          </Card>
          <Card>
            <Button
              onClick={() => {
                handleGetData();
              }}>
              Get Data
            </Button>
          </Card>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Current Balance</p>
              <h3 className={classes.cardTitle}>
                {data?.Account} 28567 <small>Rs</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Get more details!
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        {isVisibleMonth ? (
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>
                  Monthly Expenditure Report
                </h4>
                {/* <p className={classes.cardCategory}>Last Campaign Performance</p> */}
              </CardBody>
              {/* <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter> */}
            </Card>
          </GridItem>
        ) : (
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Weekly Expenditure Report</h4>
                {/* <p className={classes.cardCategory}>
              <span className={classes.successText}>
                <ArrowUpward className={classes.upArrowCardCategory} /> 55%
              </span>{" "}
              increase in today sales.
            </p> */}
              </CardBody>
              {/* <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> updated 4 minutes ago
            </div>
          </CardFooter> */}
            </Card>
          </GridItem>
        )}
        <GridItem xs={12} sm={6} md={6}>
          {/* <Card>
            <CardHeader color="dark" stats icon>
              <CardIcon color="dark">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card> */}
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button onClick={() => setIsVisibleMonth(true)}>Month</Button>
            <Button onClick={() => setIsVisibleMonth(false)}>Week</Button>
          </ButtonGroup>
        </GridItem>
      </GridContainer>

      {/* <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Tasks:"
            headerColor="dark"
            tabs={[
              {
                tabName: "Bugs",
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                ),
              },
              {
                tabName: "Website",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                ),
              },
              {
                tabName: "Server",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                ),
              },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer> */}
    </div>
  );
}

Dashboard.layout = Admin;

export default Dashboard;
