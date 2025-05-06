import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation.types";
import SigninScreen from "../screens/SigninScreen";
import HomeScreen from "../screens/HomeScreen";
import CreateAccountScreen from "../screens/CreateAccountScreen";

export default function RootStack() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#061A1E" }
      }}
    >
      <Stack.Screen name="SigninScreen" component={SigninScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="CreateAccountScreen"
        component={CreateAccountScreen}
      />
    </Stack.Navigator>
  );
}
