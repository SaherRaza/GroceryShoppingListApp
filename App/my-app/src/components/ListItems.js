import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ListItems = ({ product, quantity, price }) => {
  return (
    <View style={styles.listContainer}>
      <Text>{product}</Text>
      <Text>Quantity{quantity}</Text>
      <Text>Price{price}</Text>
    </View>
  );
};

export default ListItems;

const styles = StyleSheet.create({
  listContainer: {
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "center",
    backgroundColor: "#D3B3D3",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
});
