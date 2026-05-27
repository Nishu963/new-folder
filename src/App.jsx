import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SplashScreen from "./Screens/SplashScreens";
import SignupScreen from "./Screens/SignupScreen";
import CreateAccount from "./Screens/CreateAccount";
import AccountSettings from "./Screens/AccountSettings";

function App() {
  return (
    <BrowserRouter>

      <Routes>

    
        <Route
          path="/"
          element={<SplashScreen />}
        />

        <Route
          path="/signup"
          element={<SignupScreen />}
        />

  
        <Route
          path="/createaccount"
          element={<CreateAccount />}
        />

        <Route
          path="/account"
          element={<AccountSettings />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;