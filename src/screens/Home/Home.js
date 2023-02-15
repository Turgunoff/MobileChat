import { Alert, Button, StyleSheet, View } from "react-native"
import "../../firebase/config"
import { getAuth, signOut } from "firebase/auth"

const Home = () => {
  const logOut = () => {
    signOut(getAuth())
      .then(() => {
        console.log("User log out")
      })
      .catch((e) => Alert.alert("e.message"))
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title='Log out' onPress={logOut} />
    </View>
  )
}
export default Home
const styles = StyleSheet.create({})
