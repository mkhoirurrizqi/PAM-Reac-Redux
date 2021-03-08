import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { turnOn, turnOff } from "../redux/action";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((data) => data.counter);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", backgroundColor: `${counter}` }}>
      <TouchableOpacity style={{ backgroundColor: "#DDDDDD", paddingBottom: 5, paddingTop: 5, paddingLeft: 20, paddingRight: 20 }} onPress={() => dispatch(turnOff(counter))}>
        <Text style={{ fontSize: 30 }}>OFF</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 50, marginLeft: 20, marginRight: 20 }}>{counter}</Text>
      <TouchableOpacity style={{ backgroundColor: "#DDDDDD", paddingBottom: 5, paddingTop: 5, paddingLeft: 20, paddingRight: 20 }} onPress={() => dispatch(turnOn(counter))}>
        <Text style={{ fontSize: 30 }}>ON</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
