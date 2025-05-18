// import React from "react";
// import SignIn from "./pages/SignIn/SignIn";
// import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} /> */}
      </Routes>
    </div>
  );
}

export default App;