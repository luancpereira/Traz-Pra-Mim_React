import { useState } from "react";
import styles from "./Login.module.css";
import GoogleLogin from "react-google-login";

function Login() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const isLogged = localStorage.getItem("logged");

  const responseGoogle = (response) => {
    console.log(response);
    // const {
    // 	profileObj: { name, email, imageUrl },
    // } = response;
    // setName(name);
    // setEmail(email);
    // setProfilePic(imageUrl);
    // setIsLoggedIn(true);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.principal}>
          <div className={styles.logindiv}>
            <h1 className={styles.teste}>Traz Pra Mim</h1>
          </div>
          <div className={styles.acesse}>
            <p>Acesse nosso sistema pelo Google</p>
          </div>
          <div className={styles.googlebtn}>
            <GoogleLogin
              disabled={false}
              clientId="859550430205-qie4eh4cduu36habe270b90328jlaold.apps.googleusercontent.com"
              buttonText="Continuar Com o Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
