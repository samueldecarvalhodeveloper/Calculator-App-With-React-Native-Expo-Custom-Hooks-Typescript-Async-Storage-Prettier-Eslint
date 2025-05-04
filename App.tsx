import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/home/home_screen";
import Routes from "./src/routes/routes";

const { Navigator, Screen } = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name={Routes.HOME}
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
