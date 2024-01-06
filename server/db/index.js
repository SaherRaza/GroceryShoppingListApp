//connect to our database
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost:27017/groceryListApp")
  .then(() => {
    console.log("successfully connected db");
  })
  .catch((err) => {
    console.log("not connected", err);
  });
