import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AthleteDataCollection from "./pages/AthleteDataCollection.jsx";
import AthleteProfiles from "./pages/AthleteProfiles.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/collect-athlete-data" element={<AthleteDataCollection />} />
        <Route path="/athlete-profiles" element={<AthleteProfiles />} />
      </Routes>
    </Router>
  );
}

export default App;
