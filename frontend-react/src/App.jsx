import "./assets/css/style.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import AuthProvider from "./AuthProvider";
import { Dashboard } from "./components/Dashboard";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
