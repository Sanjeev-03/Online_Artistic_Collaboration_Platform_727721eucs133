// import { Home } from "@mui/icons-material";
import LoginPage from "./login";
import Registration from "./Registration";
import { Routes, Route } from "react-router-dom";
import Home from './home';
import ResponsiveAppBar from './navbar';
const App = () => {
  return (
    <>
    <ResponsiveAppBar/>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Registration />} />
        <Route path="/home" element={<Home/>} />
        
      </Routes>
    </>
  );
};

export default App;
