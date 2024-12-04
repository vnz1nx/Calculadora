import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaInicial from "./src/screens/TelaInicial";
import Calc1 from "./src/screens/Calc1.jsx";
import Calc2 from "./src/screens/Calc2.jsx";
// IMPORTING CUSTOM COMPONENT

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="Calc1" component={Calc1} />
        <Stack.Screen name="Calc2" component={Calc2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
