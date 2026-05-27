import {

  BrowserRouter,
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


// HOME PAGE

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


// PROTECTED ROUTE

function ProtectedRoute({children}){

  const token =
  localStorage.getItem("token");

  return token

  ? children

  : <Navigate to="/" />;
}


function App(){

  return(

    <BrowserRouter>

      <Routes>

        {/* LOGIN PAGE */}

        <Route
          path="/"
          element={<Login />}
        />


        {/* SIGNUP PAGE */}

        <Route
          path="/signup"
          element={<Signup />}
        />


        {/* HOME PAGE */}

        <Route

          path="/home"

          element={

            <ProtectedRoute>

              <Home />

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;