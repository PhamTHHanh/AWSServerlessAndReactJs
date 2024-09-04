import React from "react";

export default function NavBar() {
  return (
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
}
