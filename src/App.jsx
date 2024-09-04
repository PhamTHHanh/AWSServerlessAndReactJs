import { useState } from "react";
import "./App.css";
import javaSpring from "./assets/book-image/java-spring.jpg";
import linux from "./assets/book-image/linux.jpg";

function Book(props) {
  return (
    <div className="book-container">
      <img className="book-img" src={props.image} />
      <div style={{ fontSize: "16px", fontWeight: "500" }}>{props.name}</div>
      <div style={{ fontSize: "14px" }}>{props.author}</div>
      <button className="btn-primary">Add to cart</button>
      <button className="btn-secondary" onClick={(e) => props.onEdit()}>
        Edit
      </button>
    </div>
  );
}

function Modal(props) {
  var popupRoot = ["popup-root", "hidden"];
  var popupClass = ["popup-default"];
  if (props.visible) popupRoot[1] = "show";
  if (props.size === "large") {
    popupClass.push("popup-large");
  } else if (props.size === "medium") {
    popupClass.push("popup-medium");
  } else {
    popupClass.push("popup-small");
  }

  return (
    <div className={popupRoot.join(" ")}>
      <div className={popupClass.join(" ")}>
        <div className="popup-container">
          <div className="popup-inner">{props.header}</div>
          <div className="popup-content">{props.children}</div>
          <div className="popup-footer">{props.footer}</div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [visible, setVisible] = useState(false);
  const [bookList, setBookList] = useState([
    {
      id: "1",
      name: "Java Spring Boot in Action",
      author: "Craig Walls",
      price: "9.99$",
      des: "",
      review: "5",
      image: javaSpring,
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
  ]);

  const [currentBook, setCurrentBook] = useState();

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

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      {navBar}
      <div className="grid-container">
        {bookList.map((book) => (
          <Book
            key={book.id}
            name={book.name}
            author={book.author}
            image={book.image}
            onEdit={() => {
              setVisible(true);
              setCurrentBook(book);
            }}
          />
        ))}
      </div>
      <Modal
        header="Edit book"
        onDimiss={() => setVisible(false)}
        visible={visible}
        size="large"
        footer={
          <div className="button-group">
            <button
              className="btn-primary"
              onClick={() => {
                setBookList((prevBookList) => {
                  return prevBookList.map((book) => {
                    if (book.id === currentBook.id) return currentBook;
                    return book;
                  });
                });
                setCurrentBook(undefined);
                setVisible(false);
              }}
            >
              Save
            </button>
            <button
              className="btn-secondary"
              onClick={() => {
                setCurrentBook(undefined);
                setVisible(false);
              }}
            >
              Close
            </button>
          </div>
        }
      >
        <div className="book-content">
          <div className="form-feild">
            <div className="label">Name</div>
            <input
              type="text"
              value={currentBook?.name}
              onChange={(e) =>
                setCurrentBook({ ...currentBook, name: e.target.value })
              }
            />
          </div>
          <div className="form-feild">
            <div className="label">Author</div>
            <input
              type="text"
              value={currentBook?.author}
              onChange={(e) =>
                setCurrentBook({ ...currentBook, author: e.target.value })
              }
            />
          </div>
          <div className="form-feild">
            <div className="label">Price</div>
            <input
              type="text"
              value={currentBook?.price}
              onChange={(e) =>
                setCurrentBook({ ...currentBook, price: e.target.value })
              }
            />
          </div>
          <div className="form-feild">
            <div className="label">Description</div>
            <input
              type="text"
              value={currentBook?.des}
              onChange={(e) =>
                setCurrentBook({ ...currentBook, des: e.target.value })
              }
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
