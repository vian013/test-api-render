const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 8080;

app.listen(port, () => console.log(`Server is listening on port ${port}...`));

app.get("/", (req, res) => {
  res.send({ message: "Hello World 123!" });
});

app.post("/", (req, res) => {
  console.log(req.query);
  res.send({ message: "Post method" });
});

const router = express.Router();
app.use("/api", router);

router.get("/users", (req, res) => {
  res.send({ message: "Get users" });
});

module.exports = app;
