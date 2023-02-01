import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import React, { useState } from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Length from "./app/screens/Length";
export default function App() {
  const [weight, showWeightCalc] = useState(true);
  const { landscape } = useDeviceOrientation();
  return (
    <View style={styles.container}>
      <Text>Helo world</Text>
      <Button title="Calculate" onPress={() => showWeightCalc(true)} />
      <Button title="Calculate" onPress={() => showWeightCalc(false)} />

      {weight ? <WelcomeScreen /> : <Length />}
    </View>
  );
  // (
  //   <View style={styles.container}>
  //     {/* <View
  //       style={{
  //         flex: 0.5,

  //         backgroundColor: "blue",
  //         width: "100%",
  //         height: landscape ? "100%" : "30%",
  //       }}
  //     >
  //       <View style={{ backgroundColor: "tomato", flex: 2 }} />
  //       <View style={{ backgroundColor: "gold", flex: 2 }} />
  //       <View style={{ backgroundColor: "red", flex: 1 }} />
  //     </View> */}
  //     {/* <View
  //       style={{
  //         flex: 1,
  //         backgroundColor: "blue",
  //         flexDirection: "row",
  //         justifyContent: "space-around", //main
  //         flexWrap: "wrap",
  //         alignContent: "center",
  //         alignItems: "center", //secondary
  //       }}
  //     >
  //       <View
  //         style={{
  //           backgroundColor: "tomato",
  //           height: 100,
  //           width: 100,
  //           alignSelf: "flex-start",
  //         }}
  //       />
  //       <View
  //         style={{
  //           position: "absolute",
  //           backgroundColor: "green",
  //           right: 50,
  //           top: 50,
  //           height: 100,
  //           width: 100,
  //         }}
  //       />
  //       <View
  //         style={{
  //           backgroundColor: "pink",
  //           flexShrink: 1,
  //           height: 100,
  //           width: 100,
  //         }}
  //       />
  //       <View style={{ backgroundColor: "purple", height: 100, width: 100 }} />
  //       <View
  //         style={{
  //           backgroundColor: "orange",
  //           height: 100,
  //           right: 20,
  //           bottom: 20,
  //           width: 100,
  //         }}
  //       />

  //       <View
  //         style={{
  //           backgroundColor: "red",
  //           bottom: 20,
  //           bottom: 10,
  //           height: 100,
  //           width: 100,
  //         }}
  //       />
  //     </View> */}
  //     <Text>Hallo</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
