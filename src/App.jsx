import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import avatar from "./assets/avatar.jpeg";
import stranger from "./assets/stranger.png";

function App() {
  const [count, setCount] = useState(0);

  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }

  const user = {
    // firstName: "Hanh",
    // lastName: "Pham",
    // age: 20,
    // title: "Cloud Developer",
    // avatar: avatar,
    // hobby: "Coding, Playing Sport, Reading Book",
  };

  function getGreeting(user) {
    if (Object.keys(user).length != 0) {
      return <h1>Hello, My name is {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

  return (
    <>
      <div className="avatar">
        <img src={user.avatar || stranger} />
      </div>
      <div className="infor">{getGreeting(user)}</div>
      <div style={{ textAlign: "start" }}>
        <h3 style={{ margin: "5px" }}>
          Age: <span style={{ fontWeight: "400" }}>{user.age || "___"}</span>
        </h3>

        <h3 style={{ margin: "5px" }}>
          Tile: <span style={{ fontWeight: "400" }}>{user.title || "___"}</span>
        </h3>

        <h3 style={{ margin: "5px" }}>
          Hobby: <span style={{ fontWeight: "400" }}>{user.hobby || "___"}</span>
        </h3>
      </div>
    </>
  );
}

export default App;
