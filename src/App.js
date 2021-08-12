import { Router } from "react-router-dom";
import "./App.css";
import Home from "./pages";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Home />
    </Router>
  );
}

export default App;
