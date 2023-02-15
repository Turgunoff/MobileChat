import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import AppRoutes from "./src/routes/AppRoutes"
import AuthRoutes from "./src/routes/AuthRoutes"
import "./src/firebase/config"
import { getAuth, onAuthStateChanged } from "firebase/auth"

const App = () => {
  const [isLogged, setIsLogged] = useState(false)

  let auth = getAuth()

  useEffect(() => {
    let findOut = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true)
      } else {
        setIsLogged(false)
      }
    })
    return findOut
  }, [auth])

  return <>{isLogged ? <AuthRoutes /> : <AppRoutes />}</>
}
export default App
const styles = StyleSheet.create({})
