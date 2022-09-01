import "bootswatch/dist/flatly/bootstrap.min.css";
// TODO: Note: Replace ^[theme]^ (examples: darkly, slate, cosmo, spacelab, and superhero. See https://bootswatch.com for current theme names.)

import 'animate.css/animate.min.css'
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import Github from "./pages/Github";


function App() {

  return (

    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/github" element={<Github />} />

      </Routes>


    </Router>

  );

}

export default App;
