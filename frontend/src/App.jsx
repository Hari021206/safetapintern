import {
  HashRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Simulations from "./components/Simulations";
import Footer from "./components/Footer";
import PracticeForm from "./components/PracticeForm";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function Home(){
  return(
    <>
      <Navbar />
      <Hero />
      <Simulations />
      <PracticeForm />
      <Features />
      <Footer />
    </>
  );
}
function ProtectedRoute({children}){
  const token =
  localStorage.getItem("token");
  return token
  ? children
  : <Navigate to="/" />;
}
function App(){
  return(
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </HashRouter>
  );
}
export default App;