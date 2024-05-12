import { BrowserRouter as Router, Route, Routes, BrowserRouter} from "react-router-dom";

// Root
import RootLayout from "./components/layouts/RootLayout";
import LandingPage from "./components/pages/root/LandingPage";
import LoginPage from "./components/pages/root/LoginPage";
import RegisterPage from "./components/pages/root/RegisterPage";

// User

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />} >
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
