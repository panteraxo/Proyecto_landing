import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import HeaderLayout from "./components/navbar/HeaderLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route path="/" element={<Index />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
