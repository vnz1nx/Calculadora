import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

function TelaInicial({ navigation }) {
  return (
    <View style={style.container}>
      <View>
        <TouchableOpacity
          style={style.butao}
          onPress={() => {
            navigation.navigate("Calc1");
          }}
        >
          <Text style={style.text}>Calculadora 1</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={style.butao}
          onPress={() => {
            navigation.navigate("Calc2");
          }}
        >
          <Text style={style.text}>Calculadora 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  butao: {
    width: 100,
    height: 100,
    backgroundColor: "#0071b2",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
    margin: 10,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
export default TelaInicial;
