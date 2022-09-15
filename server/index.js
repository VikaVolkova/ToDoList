const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const todosRoutes = require("./routes/todos");
const userRoutes = require("./routes/user");

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/todos", todosRoutes);
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome!");
});

const connection_string = process.env.CONNECTION_STRING;
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((err) => console.error("MongoDB connection failed: ", err.message));
