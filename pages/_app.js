/*!

=========================================================
* NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router , {useRouter} from "next/router";

import PageChange from "components/PageChange/PageChange.js";
import { initFirebase } from "../firebase/firebaseApp";

initFirebase();
import "assets/css/nextjs-material-dashboard.css?v=1.1.0";




Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

const MyApp = ({ Component, pageProps }) => {
//   componentDidMount() {
//     let comment = document.createComment(`

// =========================================================
// * * NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard
// * Copyright 2021 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-dashboard/blob/master/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// `);
//     document.insertBefore(comment, document.documentElement);
//   }
  // static async getInitialProps({ Component, router, ctx }) {
  //   let pageProps = {};

  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx);
  //   }

  //   return { pageProps };
  // }

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    // const userIds = useSelector((state) => state.user.userId);

    // useEffect(() => {

    //   userIds ? router.push(window.location.pathname): router.push('/');

    //   console.log(window.location.pathname);
    // },[]);
    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>myFiM | My Financial Manager</title>
          {/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script> */}
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    );

}
MyApp.getInitialProps = async (appContext) => {
  // Retrieve data for the component here
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;