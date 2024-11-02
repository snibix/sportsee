import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Navlat from "./components/Navlat";

import Accueil from "./pages/Accueil";
import Profils from "./pages/Profils";
import Reglage from "./pages/Reglage";
import Communaute from "./pages/Communaute";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="content">
          <Navlat />
          <Routes>
            <Route path="/" element={<Navigate to="/user/12" />} />
            <Route path="/user/:id" element={<Accueil />} />
            <Route path="/profils" element={<Profils />} />
            <Route path="/reglage" element={<Reglage />} />
            <Route path="/communaute" element={<Communaute />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
