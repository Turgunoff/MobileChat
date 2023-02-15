import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
const ForgotPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Code' />
      <TouchableOpacity style={styles.button}>
        <Text
          style={{ color: "#fff", fontSize: 18 }}
          onPress={() => {
            navigation.navigate("LogIn")
          }}
        >
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
