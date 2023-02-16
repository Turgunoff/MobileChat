import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native"
import "../../firebase/config"
import { getAuth, signOut } from "firebase/auth"
import { onValue, ref, getDatabase } from "firebase/database"
import { useEffect, useState } from "react"
import userLogo from "../../../assets/usersLogo.png"

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (loading) {
      onValue(ref(getDatabase(), `users`), (users) => {
        let usersArray = []
        users.forEach((user) => {
          usersArray.push(user.value())
        })
        setUsers(usersArray)
      })
      setLoading(false)
    }
  }, [loading])

  const logOut = () => {
    signOut(getAuth())
      .then(() => {
        console.log("User log out")
      })
      .catch((e) => Alert.alert("e.message"))
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {users.map((user, index) => (
          <View style={styles.userContainer}>
            <Image
              source={user.profileImg ? { uri: user.profileImg } : userLogo}
              style={{
                width: 100,
                height: 100,
              }}
              alt='Image'
            />
            <View>
              <Text>Hi</Text>
              {/* <Text>{user.fullName}</Text>
              <Text>{user.email}</Text>
              <Text>{user.date}</Text> */}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}
export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userContainer: {
    flexDirection: 1,
  },
})
