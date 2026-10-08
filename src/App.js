import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import Dyslexia from './pages/dyslexia/Dyslexia';
import Navbar from "./components/navbar/Navbar";
import navbarSources from "./sources";

function App() {

  return (
    <div className="App">
        <header className="App-header">
            <Navbar
                sources={navbarSources}
            />
        </header>
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/programming/2026/04/10/dyslexia"
                       element={<Navigate to="/dyslexia"/> } />
                <Route path="/dyslexia" element={<Dyslexia />} />
            </Routes>
        </main>
    </div>
  );
}

export default App;
