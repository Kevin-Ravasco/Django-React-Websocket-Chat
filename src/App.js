import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ChatPage from "./pages/chat";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignUp from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<ChatPage />} />

      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
