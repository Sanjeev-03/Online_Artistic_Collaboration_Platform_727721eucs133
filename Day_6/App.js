// import { Home } from "@mui/icons-material";
import LoginPage from "./login";
import Registration from "./Registration";
import { Routes, Route } from "react-router-dom";
import Home from './home';
import ResponsiveAppBar from './navbar';
import Projects from "./Projects";
const App = () => {
  return (
    <>
    <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/Projects" element={<Projects/>} />
        
      </Routes>
    </>
  );
};

export default App;
