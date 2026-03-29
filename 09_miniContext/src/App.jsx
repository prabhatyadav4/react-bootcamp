import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"

function App() {

  return (
    <UserContextProvider>
      <div>React Context API</div>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
