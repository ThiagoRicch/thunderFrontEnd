import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx";
import TeamsChoose from "./components/TeamsChoose/TeamsChoose.jsx";
import { Routes, Route } from "react-router-dom";
import IdolsArsenal from "./components/IdolsArsenal/IdolsArsenal.jsx";
import IdolsChelsea from "./components/IdolsChelsea/IdolsChelsea.jsx";
import IdolsLiverpool from "./components/IdolsLiverpool/IdolsLiverpool.jsx";
import IdolsManCity from "./components/IdolsManCity/IdolsManCity.jsx";
import IdolsManUnited from "./components/IdolsManUnited/IdolsManUnited.jsx";
import IdolsTottenham from "./components/IdolsTottenham/IdolsTottenham.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Home from "./components/Home/index.jsx";
import Error404 from "./components/Error404/Error404.jsx";
function App() {

  return (
    <>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/teamschoose" element={<TeamsChoose />} />
          <Route path="/idolsarsenal" element={<IdolsArsenal />} />
          <Route path="/idolschelsea" element={<IdolsChelsea />} />
          <Route path="/idolsliverpool" element={<IdolsLiverpool />} />
          <Route path="/idolsmancity" element={<IdolsManCity />} />
          <Route path="/idolsmanunited" element={<IdolsManUnited />} />
          <Route path="/idolstottenham" element={<IdolsTottenham />} /> 
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
    </>
  )
}

export default App
