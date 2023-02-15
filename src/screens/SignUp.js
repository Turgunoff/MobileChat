import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import "../firebase/config"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"

const SignUp = ({ navigation }) => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const registerUser = () => {
    if (!fullName || !email || !password) {
      Alert.alert("Please fill out the form!")
    } else {
      createUserWithEmailAndPassword(getAuth(), email, password)
        .then(() => {
          Alert.alert("Succesfull")
        })
        .catch((e) => Alert.alert(e.message))
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Full name'
        onChangeText={(value) => setFullName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder='Email'
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder='Password'
        onChangeText={(value) => setPassword(value)}
      />
      <TouchableOpacity style={styles.button} onPress={registerUser}>
        <Text style={{ color: "#fff", fontSize: 18 }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}
export default SignUp
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
