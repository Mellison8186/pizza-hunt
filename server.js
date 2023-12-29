const mongoose = require("mongoose");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("./routes"));

mongoose.connect(process.env.DB_URI, {
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  pass:process.env.DB_PASS
})
.then(() => {
  console.log('Victory is mine!');
})
.catch((err) => {
  console.log(err.message)
});

// Use this to log mongo queries being executed!
mongoose.set("debug", true);
app.listen(PORT, () => {
  console.log(`🌍 Connected on localhost:${PORT}`);
});