import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AthleteDataCollection from "./pages/AthleteDataCollection.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/collect-athlete-data" element={<AthleteDataCollection />} />
      </Routes>
    </Router>
  );
}

export default App;
