import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const AddItems = ({ onSubmit }) => {
  const { product, setProduct } = useState("");
  const { quantity, setQuantity } = useState("");
  const { price, setPrice } = useState("");

  const handleSubmit = () => {
    onSubmit({ product, quantity, price });
    setProduct("");
    setQuantity("");
    setPrice("");
  };
  return (
    <View style={styles.AddItemsContainer}>
      <TextInput
        style={styles.TextInputContainer}
        placeholder="Product Name"
        value={product}
        onChangeText={setProduct}
      />
      <TextInput
        style={styles.TextInputContainer}
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
      />
      <TextInput
        style={styles.TextInputContainer}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.btnContainer}>
        <Text>Add to List</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItems;

const styles = StyleSheet.create({
  AddItemsContainer: {
    width: "85%",
    alignSelf: "center",
    marginTop: 10,
    // backgroundColor: "red",
    height: 200,
    borderRadius: 10,
  },
  btnContainer: {
    backgroundColor: "#D3B3D3",
    height: 50,
    width: 120,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  TextInputContainer: { padding: 15 },
});
