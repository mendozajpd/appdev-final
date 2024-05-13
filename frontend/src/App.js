import { BrowserRouter as Router, Route, Routes, BrowserRouter} from "react-router-dom";

// Root
import RootLayout from "./components/layouts/RootLayout";
import LandingPage from "./components/pages/root/LandingPage";
import LoginPage from "./components/pages/root/LoginPage";
import RegisterPage from "./components/pages/root/RegisterPage";

// User
import UserLayout from "./components/layouts/UserLayout";
import HomePage from "./components/pages/user/HomePage";
import ChatPage from "./components/pages/user/ChatPage";
import ProfilePage from "./components/pages/user/ProfilePage";
import PetsPage from "./components/pages/user/PetsPage";
import PetDetailsPage from "./components/pages/user/PetDetailsPage";

// Admin
import AdminLayout from "./components/layouts/AdminLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout />} >
          <Route index element={<HomePage />} />
          <Route path="chat" element={<ChatPage />} />
        </Route>
        <Route path="landing" element={<RootLayout />} >
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
