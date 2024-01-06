const express = require("express");
require("./db");
const GroceryList = require("./db/models/data"); // model name in database as well
const app = express();
const port = 3000;

// Middleware to parse JSON payloads
app.use(express.json());

// this will parse post request coming from html form
app.use(express.urlencoded({ extended: false }));

app.post("/create", async (req, res) => {
  // Extracting vegetable name and quantity from the request body
  const { productName, quantity, price } = req.body; // fields of postman
  const groceryList = new GroceryList({
    productName: productName, // key & value
    quantity: quantity,
    price: price,
  });
  await groceryList.save();

  // Check if both vegetableName and quantity are provided
  if (!productName || quantity == null || price == null) {
    // Respond with an error message if either is missing
    return res.json({
      error: "Please provide both vegetable name, price and quantity",
    });
  }

  res.json({
    message: "i got the values",
    productName,
    quantity,
    price,
  });
});

app.patch("/:id", async (req, res) => {
  const { id } = req.params; // ID of the item to update
  const { productName, quantity, price } = req.body; // Object with the field(s) to update

  const updatedItem = await GroceryList.findByIdAndUpdate(
    id,
    { productName, quantity, price },
    { new: true }
  );
  // if (!note) return res.json({ error: "note not found" }); // if note is not found
  // res.json({
  //   note: { id: note._id, title: note.title, description: note.description },
  // }); // note will give results to frontend or in this case to postman
  res.json(updatedItem);
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params; // ID of the item to update
  const removeId = await GroceryList.findByIdAndDelete(id);
  if (!removeId) return res.json({ error: "list not found" });
  res.json({ message: "list is removed!" });
});

app.get("/groceries", async (req, res) => {
  try {
    const allGroceries = await GroceryList.find();
    res.json(allGroceries);
  } catch (error) {
    res.json({ error: "Internal Server Error" });
  }
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const singleList = await GroceryList.findById(id);
  if (!singleList) return res.json({ error: "list not found" });
  res.json(singleList);
});

app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
