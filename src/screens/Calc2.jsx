import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";

const Calc2 = () => {
  const [resultado, setResultado] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.butaoapagar}
          onPress={() => {
            setResultado("");
          }}
        >
          <Text style={styles.numbers}>C</Text>
        </TouchableOpacity>
        <TextInput
          keyboardType="numeric"
          value={resultado}
          onChangeText={(text) => setResultado(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.div}>
        <View style={styles.coluna1}>
          <View style={styles.fila1}>
            <TouchableOpacity
              style={styles.butoes}
              onPress={() => {
                setResultado((prev) => prev + "7");
              }}
            >
              <Text style={styles.numbers}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.butoes}
              onPress={() => {
                setResultado((prev) => prev + "8");
              }}
            >
              <Text style={styles.numbers}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.butoes}
              onPress={() => {
                setResultado((prev) => prev + "9");
              }}
            >
              <Text style={styles.numbers}>9</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.fila1}>
            <TouchableOpacity
              style={styles.butoes}
              onPress={() => {
                setResultado((prev) => prev + "4");
              }}
            >
              <Text style={styles.numbers}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.butoes}
              onPress={() => {
                setResultado((prev) => prev + "5");
              }}
            >
              <Text style={styles.numbers}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.butoes}
              onPress={() => {
                setResultado((prev) => prev + "6");
              }}
            >
              <Text style={styles.numbers}>6</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.fila1}>
            <TouchableOpacity
              style={styles.butoes}
              onPress={() => {
                setResultado((prev) => prev + "1");
              }}
            >
              <Text style={styles.numbers}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.butoes}
              onPress={() => {
                setResultado((prev) => prev + "2");
              }}
            >
              <Text style={styles.numbers}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.butoes}
              onPress={() => {
                setResultado((prev) => prev + "3");
              }}
            >
              <Text style={styles.numbers}>3</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.fila1}>
            <TouchableOpacity
              style={styles.butoes}
              onPress={() => {
                setResultado((prev) => prev + "0");
              }}
            >
              <Text style={styles.numbers}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.igualdade}
              onPress={() => {
                const result = eval(resultado);
                setResultado(result.toString());
              }}
            >
              <Text style={styles.numbers}>=</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.coluna2}>
          <View style={styles.fila2}>
            <TouchableOpacity
              style={styles.sinais}
              onPress={() => {
                setResultado((prev) => prev + "+");
              }}
            >
              <Text style={styles.numbers}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sinais}
              onPress={() => {
                setResultado((prev) => prev + "-");
              }}
            >
              <Text style={styles.numbers}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sinais}
              onPress={() => {
                setResultado((prev) => prev + "*");
              }}
            >
              <Text style={styles.numbers}>x</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sinais}
              onPress={() => {
                setResultado((prev) => prev + "/");
              }}
            >
              <Text style={styles.numbers}>/</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  input: {
    borderWidth: 1,
    borderRadius: 3,
    height: 60,
    width: 300,
    marginBottom: 10,
  },
  fila1: {
    flexDirection: "row",
  },
  fila2: {
    flexDirection: "column",
  },
  div: {
    height: "65%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  coluna1: {
    height: "100%",
    marginRight: 20,
  },
  coluna2: {
    height: "100%",
  },
  butoes: {
    width: 60,
    height: 60,
    backgroundColor: "#B8EAEf",
    borderColor: "black",
    borderWidth: 1,
    margin: 6,
    marginBottom: 10,
    justifyContent: "center",
  },
  butaoapagar: {
    width: 60,
    height: 60,
    backgroundColor: "#EB4E55",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 15,
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  sinais: {
    width: 65,
    height: 60,
    backgroundColor: "#E0B1EB",
    borderColor: "black",
    borderWidth: 1,
    margin: 6,
    marginBottom: 10,
    justifyContent: "center",
  },
  numbers: {
    fontWeight: "500",
    fontSize: 20,
    textAlign: "center",
  },
  igualdade: {
    width: 130,
    height: 60,
    backgroundColor: "#AAEBB3",
    borderColor: "black",
    borderWidth: 1,
    margin: 6,
    justifyContent: "center",
  },
});

export default Calc2;
