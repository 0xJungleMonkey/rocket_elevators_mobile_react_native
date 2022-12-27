import { useEffect, useState } from "react";
import LoginScreen from "react-native-login-screen";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    console.log(email, password);
  }, []);
  const handleChange = (event) => {
    // event.preventDefault();
    // password.preventDefault();
    if (email === null) {
      setPassword(password);
    } else setEmail(email);
    console.log(email, password);
  };
  return (
    <LoginScreen
      disableSocialButtons
      logoImageSource={require("./assets/logo.jpg")}
      onLoginPress={() => {}}
      onSignupPress={() => {}}
      onEmailChange={(email) => handleChange}
      onPasswordChange={(password) => handleChange}
    />
  );
}
