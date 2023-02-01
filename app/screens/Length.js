import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from "react-native";

const lengthConversion = {
  inch: 1,
  centimeter: 2.54,
};

const Length = () => {
  const [number, onChangeNumber] = React.useState("");
  const [converted, onConvert] = React.useState("");

  const convert = () => {
    const conv = lengthConversion.centimeter * parseFloat(number);
    onConvert(conv);
    console.log(lengthConversion.centimeter);
    console.log(typeof parseFloat(number));
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Button
        title="convert"
        onPress={() => {
          convert();
        }}
      />
      <View
        style={{
          top: 20,
          padding: 20,
          backgroundColor: "dodgerblue",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            alignItems: "center",
          }}
        >{`${converted} centimeters`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default Length;
