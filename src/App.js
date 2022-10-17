import { Routes, Route } from "react-router-dom";
import { Home, Login, ProtectedRoute, Register, Landing } from "./components";
import { AuthProvider } from "./context/authContext";
import "../src/styles/App.css";


function App() {
  return (
    // <div className="bg-neutral-300 h-screen flex">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    // </div>
  );
}

export default App;
