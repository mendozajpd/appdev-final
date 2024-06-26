import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";

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
import ProfileDetailsPage from "./components/pages/user/ProfileDetailsPage";
import PetsPage from "./components/pages/user/PetsPage";
import PetDetailsPage from "./components/pages/user/PetDetailsPage";
import PetEditPage from "./components/pages/user/PetEditPage";

// Admin
import AdminLayout from "./components/layouts/AdminLayout";

// Context
import ToastContext from "./context/ToastContext";

// Prime React
import { Toast } from 'primereact/toast';

function App() {
  const toast = useRef(null);

  const show = (severity, summary, detail) => {
    toast.current.show({ severity, summary, detail });
  };

  return (
    <ToastContext.Provider value={show}>
      <Toast ref={toast} />
      <Router>
        <Routes>
          <Route path="/" element={<UserLayout />} >
            <Route index element={<HomePage />} />
            <Route path="chat/:id?" element={<ChatPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="profile/edit" element={<ProfileDetailsPage />} />
            <Route path="pets" element={<PetsPage />} />
            <Route path="pets/:id?" element={<PetDetailsPage />} />
            <Route path="pets/:id?/edit" element={<PetEditPage />} />
          </Route>
          <Route path="landing" element={<RootLayout />} >
            <Route index element={<LandingPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </Router>
    </ToastContext.Provider>
  );
}

export default App;
