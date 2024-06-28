import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import { database, password } from "pg/lib/defaults";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "learningAuth",
  password: "Pointbreak",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
