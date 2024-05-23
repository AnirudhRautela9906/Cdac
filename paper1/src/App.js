import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Book from "./Book.js";

function App() {
  const baseUrl = "http://localhost:5000";

  const [books, setBooks] = useState([]);
  const [name, setname] = useState("");
  const [author, setauthor] = useState("");
  const [price, setprice] = useState("");

  const handlerNameChange = (e) => {
    // console.log(e.target.value);
    setname(e.target.value);
  };
  const handlerAuthorChange = (e) => {
    // console.log(e.target.value);
    setauthor(e.target.value);
  };
  const handlerPriceChange = (e) => {
    // console.log(e.target.value);
    setprice(e.target.value);
  };
  const handlerAdd = async () => {
    let data = {
      name: name,
      author: author,
      price: price,
    };
    console.log(data);
    await axios.post(baseUrl + "/books", data);
    setname("");
    setauthor("");
    setprice("");
  };

  useEffect(() => {
    const loadBooks = async () => {
      let data = await axios.get(baseUrl);
      setBooks(data.data);
    };
    loadBooks();
  }, [books]);

  return (
    <div className="App">
      <div className="add">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={handlerNameChange}
          value={name}
        />
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          onChange={handlerAuthorChange}
          value={author}
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          onChange={handlerPriceChange}
          value={price}
        />
        <button onClick={handlerAdd}>Add</button>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Author</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {books.map((e) => {
              return (
                <Book
                  key={e.id}
                  id={e.id}
                  name={e.name}
                  author={e.author}
                  price={e.price}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
