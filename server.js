const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(require("cors")());
let arr = [];
app.post("/message", (req, res) => {
  if (!arr.includes(req.body.user)) {
    arr.push({ user: req.body.user, msg: req.body.elem });
    console.log(req.body.user, ": ", req.body.elem);
  }
  res.send(arr);
});
app.get("/data", (req, res) => {
  res.send(arr);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
