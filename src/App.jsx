import Rotas from "./components/Routes";
import { useState } from "react";
import GoogleLogin from "react-google-login";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const isLogged = localStorage.getItem('logged')

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
        <div className="container">
          <GoogleLogin
            disabled={false}
            clientId="859550430205-qie4eh4cduu36habe270b90328jlaold.apps.googleusercontent.com"
            buttonText="Continuar Com o Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </div>
    </>
  );
}

export default App;
