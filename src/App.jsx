import { Route, Routes } from "react-router-dom"
import Home from "./views/Home/Home"
import './i18n'


function App() {

  return (
    <>
    <Routes>
      <Route element={<Home />} path="/"/>
    </Routes>
    </>
  )
}

export default App
