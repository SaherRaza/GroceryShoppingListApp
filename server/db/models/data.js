const mongoose = require("mongoose");

// defining a model

const groceryListSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "Quantity cannot be negative"],
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price cannot be negative"],
    },
  },
  { timestamps: true }
  // An option that, if set to true,
  // adds createdAt and updatedAt fields to the schema, automatically managed by Mongoose.
);

const GroceryList = mongoose.model("GroceryList", groceryListSchema);

module.exports = GroceryList;
