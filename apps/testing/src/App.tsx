import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import UseBooleanPage from "./pages/use-boolean-page";
import UseClickOutsidePage from "./pages/use-click-outside-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/use-boolean" element={<UseBooleanPage />} />
        <Route path="/use-click-outside" element={<UseClickOutsidePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
