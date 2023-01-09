import React from "react";
import Router, { useRouter } from "next/router";
import { initFirebase } from "../firebase/firebaseApp";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from "@material-ui/core";
import GoogleIcon from "@mui/icons-material/Google";
import zIndex from "@material-ui/core/styles/zIndex";
import Loading from "../components/Loading/Loading";
import "assets/css/nextjs-material-dashboard.css?v=1.1.0";

import GitHubIcon from '@mui/icons-material/GitHub';

import { Provider } from "react-redux";
import { store } from "store.js";


export default function Index() {
  // React.useEffect(() => {
  //   Router.push("/admin/dashboard");
  // });
  initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    console.log(user);
    
    router.push("/admin/dashboard");
    return <div>Loading...</div>;
  }

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  };

  const bodyStyle = {
    background:"radial-gradient(54.35% 54.35% at 13.82% 7%, #162051 0%, #161B32 100%)",
    color:"#fff"
  }

  const centerStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "20%",
  };

  const myStyle = {
    borderBottom:"1px solid #475264",
    paddingLeft:".75rem",
    paddingBottom:".75rem",
    paddingTop:".75rem",
    marginLeft:"1.5rem",
    marginRight:"1.5rem",
    fontSize:".75rem"
  }
  const bodyContent = {
    padding: "10%"
  }
  const paraStyle = {
    fontWeight:"300",
    fontSize:"2rem",
    marginTop:"0",
    marginBottom:"1.5rem",
    lineHeight:"1.25",
    color:"#8391a7"
  }
  const h1Style = {
    fontSize:"3.5rem",
    marginTop:"0",
    marginBottom:"1.5rem",
    lineHeight:"1.25",
    fontWeight:"600",
    fontFamily:"Manrope,sans-serif"
  }
  const getStartedStyle = {
    paddingTop: "10px",
    paddingBottom: "10px"
  }
  const featuresStyle={
    alignItems: "center",
    textAlign: "center",
    padding: "10%",
    fontSize:"1.5rem",
    lineHeight:"1.25"
  }
  const h2Style = {
    fontWeight:"400",
    fontSize:"2rem",
    lineHeight:"1.25",
    letterSpacing:"2px"
  }
  const footerStyle = {
    textAlign:"center",
    padding: "10%",
    background:"radial-gradient(54.35% 54.35% at 13.82% 7%, #162051 0%, #161B32 100%)",
    color:"#475264",
    fontSize:"1.5rem"
  }
  const h3Style = {
    fontSize:"1rem",
    padding: "3%"
  }
  return (
    <>
    <div style = {bodyStyle}>
      <div style = {myStyle}>
      <Loading />
      </div>
      <div style = {bodyContent}>
      <div>
        <h1 style={h1Style}>Get started</h1>
        <p style={paraStyle}>Presenting to you the one stop app <br/> for all your banking and financial decisions</p>
      </div>
      <div style={getStartedStyle} >
        <Button size="large" variant="contained" color="success" onClick={signIn} startIcon={<GoogleIcon />}>Please Sign In With Google</Button>
      </div>
    </div>
    </div>
    <div style = {featuresStyle}>
      <h2 style={h2Style}>Our Features</h2>
      <p>Our app is modeled to control the task <br/>via a bot that 
        is voice activated.The bot is designed to navigate the pages 
        by <br/>speach recognition.My Fim is also a budget manager where you 
        can keep track of <br/>the finances and consents, also make transactions.</p>
    </div>
    <div style={footerStyle}>
      <p>SEE THE SOURCE CODE</p>
      <Button size="large" variant="outlined" color="primary" href="https://github.com/MAX-786/myFiM" startIcon={<GitHubIcon/>}>View on Github</Button>
      <h3 style={h3Style}>&copy; {1900 + new Date().getYear()}{" "}Copyright myFim</h3>
    </div>

   
    </>
  );
}
