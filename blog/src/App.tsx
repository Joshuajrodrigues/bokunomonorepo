import { greetUser } from '@bokunomonorepo/lib'
import './App.css'

function App() {


  return (
    <>
      <button onClick={() => {
        greetUser({
          firstName: "Joshua",
          lastName: "rodrigues",
          isAdmin: false,
          email: "rodrigues@email.gmal"
        })
      }}> check user </button>


    </>
  )
}

export default App
