import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ListItems from "../components/ListItems";
import { Entypo } from "@expo/vector-icons";
import AddItems from "../components/AddItems";
const screenHeight = Dimensions.get("window").height;
const HomeScreen = () => {
  const [list, setList] = useState([
    { product: "apple", quantity: "3 kg", price: "200" },
  ]);
  const [showInput, setShowInput] = useState(false);

  const handleInput = ({ item }) => {
    setList([...list, item]);
    setShowInput(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.textStyle}>My Grocery List</Text>
      </View>
      <View style={styles.line} />
      {list.map((index, item) => (
        <View key={index} style={styles.listContainer}>
          <ListItems
            product={item.product}
            quantity={item.quantity}
            price={item.price}
          />
        </View>
      ))}
      {showInput && <AddItems onSubmit={handleInput} />}
      <TouchableOpacity
        onPress={() => setShowInput(true)}
        style={styles.addListContainer}
      >
        <Entypo name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: screenHeight * 0.07,
    alignSelf: "center",
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  line: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
    width: "80%",
    alignSelf: "center",
  },
  listContainer: {
    //  height: screenHeight * 0.65,
  },
  addListContainer: {
    backgroundColor: "#D3B3D3",
    height: 60,
    width: 60,
    borderRadius: 360,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 70,
    right: 20,
  },
});
