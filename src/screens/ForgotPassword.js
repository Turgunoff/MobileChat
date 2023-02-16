import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import "../firebase/config"
import { getAuth, sendPasswordResetEmail } from "firebase/auth"
import { useState } from "react"

const ForgotPassword = () => {
  const [email, setEmail] = useState("")

  const sentCode = () => {
    sendPasswordResetEmail(getAuth(), email)
      .then(() => Alert.alert(`Send code to ${email}`))
      .catch((e) => Alert.alert(e.message))
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Email'
        onChangeText={(value) => setEmail(value)}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "#fff", fontSize: 18 }} onPress={sentCode}>
          Restore
        </Text>
      </TouchableOpacity>
    </View>
  )
}
export default ForgotPassword
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
