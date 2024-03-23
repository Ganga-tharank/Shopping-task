import Home from "./Pages/Home/index";
import "./App.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/Productdetails";
import NavBar from "./Components/Header";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./Contexts/Auth.context";
import { useContext } from "react";
import NotFound from "./Pages/NotFound";

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <NavBar />
      <div className="mb-3"></div>
      <Routes>
        {!isLoggedIn && (
          <>
            <Route Component={Login} path="/" />
            <Route Component={Signup} path="/signup" />
          </>
        )}
        <Route Component={Home} path="/home/:id" />
        <Route Component={ProductDetails} path="/productdetails" />
        {isLoggedIn && (
          <>
            <Route Component={Cart} path="/cart" />
          </>
        )}
        <Route Component={NotFound} path="*" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;