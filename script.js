import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//TO DO:
//Add requests to the endpoints from the Buttons.

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/Home", (req, res) => {
  res.sendFile(__dirname + "/Pages/Home.html");
});
app.get("/Hobbies", (req, res) => {
  res.sendFile(__dirname + "/Pages/Hobbies.html");
});
app.get("/Books", (req, res) => {
  res.sendFile(__dirname + "/Pages/Books.html");
});
app.get("/Shows", (req, res) => {
  res.sendFile(__dirname + "/Pages/Shows.html");
});
app.get("/Contact", (req, res) => {
  res.sendFile(__dirname + "/Pages/Contact.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
