import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import avatar from "./assets/avatar.jpeg";
import stranger from "./assets/stranger.png";
import Profile from "./component/Profile";
import Form from "./component/Form";

function App() {
  const [profile, setProfile] = useState({
    lastName: "",
    firstName: "",
    email: "",
  });

  function updateProfile(key, value) {
    setProfile({ ...profile, [key]: value });
  }

  return (
    <>
      <Profile profile={profile}/>
      <Form updateProfile={updateProfile}/>
    </>
  );
}

export default App;
