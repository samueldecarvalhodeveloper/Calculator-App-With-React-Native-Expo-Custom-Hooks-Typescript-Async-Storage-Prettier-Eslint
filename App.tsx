import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/home/home_screen";
import Routers from "./src/routers/routers";

const { Navigator, Screen } = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name={Routers.HOME}
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
