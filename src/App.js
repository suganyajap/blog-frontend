import "./App.css";

import Home from "./pages/home/Home";
import TopNavbar from "./components/topnavbar/TopNavbar";
import Single from "./components/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Sidebar from "./components/sidebar/Sidebar";
// import Post from "./Components/Post/Post";
function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Sidebar />} />

        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;