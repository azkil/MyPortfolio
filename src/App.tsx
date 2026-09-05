import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import AIAgentPage from "./pages/AIAgentPage"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai-agent" element={<AIAgentPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App