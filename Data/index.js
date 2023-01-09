import axios from "axios";
import Router from "next/router";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export function initiateConsents() {
  let userData = {};
  const data = JSON.stringify({
    vuaId: "9987600001@dashboard-aa-uat",
    templateType: "PERIODIC",
    trackingId: "f35761ac-4a18-11e8-96ff-0277a9fbfed",
    redirectionUrl: "http://localhost:3000/admin/dashboard",
  });

  const config = {
    method: "post",
    url: "https://hackathon.pirimidtech.com/hackathon/init/redirection",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      API_KEY: "1e3361e7b31e04df81befdcfe3",
    },
    data: data,
  };

  axios(config)
    .then(function (res) {
      console.log(res.data);
      userData = res.data;
      window.localStorage.setItem("trackingId", res.data.trackingId);
      window.localStorage.setItem("referenceId", res.data.referenceId);

      Router.push(res.data.redirectionUrl);
    })
    .catch(function (error) {
      console.log(error);
    });
  return userData;
}

export function checkStatus() {
  let res = {};
  var config = {
    method: "get",
    url: "https://hackathon.pirimidtech.com/hackathon/consent/status",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      API_KEY: "1e3361e7b31e04df81befdcfe3",
    },
    data: null, // Dunno WHY? but it was needed. Stackoverflow helped.
    params: {
      trackingId: "f35761ac-4a18-11e8-96ff-0277a9fbfed",
      referenceId: "ff79484f-559b-475c-aa77-8a049ad0ba1a"
    }
  };

  axios(config)
    .then(function (response) {
      res = response.data;
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
}

export function getData() {
  let res = {};
  var config = {
    method: "get",
    url: "https://hackathon.pirimidtech.com/hackathon/consent/data/fetch?trackingId=f35761ac-4a18-11e8-96ff-0277a9fbfed&referenceId=ff79484f-559b-475c-aa77-8a049ad0ba1a",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      API_KEY: "1e3361e7b31e04df81befdcfe3",
    },
    data: null, // Dunno WHY? but it was needed. Stackoverflow helped.
    // params: {
    //   trackingId: "f35761ac-4a18-11e8-96ff-0277a9fbfed",
    //   referenceId: "ff79484f-559b-475c-aa77-8a049ad0ba1a"
    // }
  };

  axios(config)
    .then(function (response) {
      res = response.data;
      // console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
}