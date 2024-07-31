import { useState } from "react";
import "./App.css";
import avatar from "./assets/avatar.jpeg";
import stranger from "./assets/stranger.png";
import javeSpring from "./assets/book-image/java-spring.jpg";
import linux from "./assets/book-image/linux.jpg";

function App() {
  const bookList = [
    {
      id: "1",
      name: "Java Spring Boot in Action",
      author: "Craig Walls",
      price: "9.99$",
      des: "",
      review: "5",
      image: javeSpring,
    },
    {
      id: "2",
      name: "Linux for Beginners",
      author: "Dylan Mach",
      price: "10.99$",
      des: "A Comprehesnive Step by Step Starting Guide To Learn Linux from Scratch",
      review: "4.5",
      image: linux,
    },
  ];
  const navBar = (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#EC7211",
          height: "auto",
          display: "flex",
          alignItems: "center",
          padding: "10px 50px",
          color: "white",
        }}
      >
        <div style={{ fontSize: "26px", fontWeight: "700" }}>Book Store</div>
        <div style={{ paddingLeft: "20px" }}> Home </div>
      </div>
    </>
  );

  const bookEle = bookList && bookList.map((book) => {
    return (
      <div className="book-container">
        <img className="book-img" src={book.image} />
        <div style={{ fontSize: "16px", fontWeight: "500" }}>{book.name}</div>
        <div style={{ fontSize: "14px" }}>{book.author}</div>
        <button className="btn-primary">Add to cart</button>
      </div>
    );
  });

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      {navBar}
      <div className="grid-container">{bookEle}</div>
    </div>
  );
}

export default App;
