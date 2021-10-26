const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//import Routes
const userRoutes = require("./routes/user");

//app
const app = express();

//db connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connected"));

//routes middleware
app.use("/api", userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

// import mongoose

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});
