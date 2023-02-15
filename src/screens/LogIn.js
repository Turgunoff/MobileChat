import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native"
import "../firebase/config"
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { useState } from "react"

const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const LogUserIn = () => {
    signInWithEmailAndPassword(getAuth(), email, password)
      .then(() => Alert.alert("Succesfull"))
      .catch((e) => Alert.alert(e.message))
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextInput
            style={styles.input}
            placeholder='Email'
            onChangeText={(value) => setEmail(value)}
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            secureTextEntry={true}
            onChangeText={(value) => setPassword(value)}
          />
          <Text
            style={{ marginTop: 2, marginBottom: 10, color: "#40A7E3" }}
            onPress={() => {
              navigation.navigate("ForgotPassword")
            }}
          >
            Forgot password
          </Text>
          <TouchableOpacity style={styles.button} onPress={LogUserIn}>
            <Text style={{ color: "#fff", fontSize: 18 }}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: "#40A7E3",
              borderWidth: 1,
              width: 120,
              padding: 8,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{ color: "#40A7E3", fontSize: 18 }}
              onPress={() => {
                navigation.navigate("SignUp")
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
export default LogIn
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#40A7E3",
    width: 250,
    padding: 8,
    margin: 5,
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#40A7E3",
    width: 120,
    color: "#fff",
    padding: 8,
    margin: 5,
    alignItems: "center",
  },
})
