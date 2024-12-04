import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Text } from "react-native";

const Calc1 = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [resultado, setResultado] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <Text>Valor A:</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={(text) => setNumber1(text)}
          style={styles.input}
        />

        <Text>Valor B:</Text>
        <TextInput
          keyboardType="numeric"
          value={number2}
          onChangeText={(text) => setNumber2(text)}
          style={styles.input}
        />

        <Button
          onPress={() => {
            setResultado(parseFloat(number1) + parseFloat(number2));
          }}
          title="SOMAR (A + B)"
        />
        <br />
        <Button
          onPress={() => {
            setResultado(parseFloat(number1) - parseFloat(number2));
          }}
          title="SUBTRAIR (A - B)"
        />
        <br />
        <Button
          onPress={() => {
            setResultado(parseFloat(number1) * parseFloat(number2));
          }}
          title="MULTIPLICAR (A * B)"
        />
        <br />
        <Button
          onPress={() => {
            setResultado(parseFloat(number1) / parseFloat(number2));
          }}
          title="DIVIDIR (A / B)"
        />
        <br />
        <Text style={styles.textResul}>Resultado: {resultado}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  textResul: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 3,
    height: 35,
    width: 300,
    marginBottom: 15,
  },
});

export default Calc1;
