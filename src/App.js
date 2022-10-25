import { Routes, Route } from "react-router-dom";
import { Home, Login, ProtectedRoute, Register, Landing } from "./components";
import { AuthProvider } from "./context/authContext";
import ExerciseDetail from "./components/ExerciseDetail";
import "../src/styles/App.css";


function App() {
  return (
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
          <Route
            path="/exercise/:id" 
            element={<ProtectedRoute><ExerciseDetail /></ProtectedRoute>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
  );
}

export default App;
