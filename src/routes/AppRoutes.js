import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StyleSheet } from "react-native"
import ForgotPassword from "../screens/ForgotPassword"
import Home from "../screens//Home/Home"
import LogIn from "../screens/LogIn"
import SignUp from "../screens/SignUp"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='LogIn'
          component={LogIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='ForgotPassword'
          component={ForgotPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
