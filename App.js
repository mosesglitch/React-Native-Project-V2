import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
export default function App() {
  const { landscape } = useDeviceOrientation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: "blue",
          width: "100%",
          height: landscape ? "100%" : "30%",
        }}
      >
        <View style={{ backgroundColor: "gold", flex: 1 }} />
        <View style={{ backgroundColor: "red", flex: 1 }} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
