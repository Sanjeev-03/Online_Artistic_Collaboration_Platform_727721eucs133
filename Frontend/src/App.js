import Registration from "./Registration";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Projects from "./Projects";
import LoginPage from "./LoginPage";
import Community from "./Community";
import Domain from "./Domain";
import Hackethon from "./components/hackethon";
import Entertainer from "./components/entertainer";
import Comic from "./components/comic";
import Fashion from "./components/fashion";
import Music from "./components/Music";
import Literary from "./components/literary";
import FeedForm from "./feedback";
import Update_profile from "./Update_profile";
import Store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <>
      {/* <ResponsiveAppBar /> */}
      <Provider store={Store}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/Domain" element={<Domain />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LoginPage />} />
          <Route path="/hackethon" element={<Hackethon />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/litrary" element={<Literary />} />
          <Route path="/music" element={<Music />} />
          <Route path="/entertainer" element={<Entertainer />} />
          <Route path="/comic" element={<Comic />} />
          <Route path="/feedback" element={<FeedForm />} />
          <Route path="/Update_profile" element={<Update_profile />} />
        </Routes>
      </Provider>
    </>
  );
};

export default App;
