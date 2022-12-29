import React from "react";
import Router, {useRouter} from "next/router";
import { initFirebase } from "../firebase/firebaseApp";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from "@material-ui/core";
import GoogleIcon from '@mui/icons-material/Google';
import zIndex from "@material-ui/core/styles/zIndex";
import Loading from "../components/Loading/Loading";
import "assets/css/nextjs-material-dashboard.css?v=1.1.0";

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
    router.push("/dashboard");
    return <div>Loading...</div>;
  }

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  };
  const centerStyle = {
      display: "flex",
      justifyContent: "center",
      padding: "20%"
    }  
  const myStyle = {
    background: "antiquewhite",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
  return (
    <>
    <div style = {myStyle}>
      <Loading />
      </div>
      <div style={centerStyle} >
      <Button size="large" variant="contained" color="success" onClick={signIn} startIcon={<GoogleIcon />}>Please SignIn With Google</Button>
        </div>

    </>
  );
}
