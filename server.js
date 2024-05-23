const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
let books = [
  {
    id: 1,
    name: "Meow",
    author: "Anirudh",
    price: "5000",
  },
];

function generateId() {
  return books.length + 1;
}

app.get("/", (req, res) => {
  res.status(200).json(books);
});

app.post("/books", (req, res) => {
  const { name, author, price } = req.body;
  const newBook = {
    id: generateId(),
    name,
    author,
    price,
  };
  books.push(newBook);
  console.log(books);

  res.status(201).json(newBook);
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
