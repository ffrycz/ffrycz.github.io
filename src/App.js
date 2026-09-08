import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import Dyslexia from './pages/dyslexia/Dyslexia';
import Navbar from "./components/navbar/Navbar";

class Source {
    constructor(name, path) {
        this.name = name;
        this.path = path;
    }
}

const navbarSources = [
    new Source("Dysleksja", "/dyslexia"),
    new Source("Programowanie", "/programming"),
    new Source("Filmy", "/movies"),
    new Source("Muzyka", "/music"),
    new Source("Gry", "/games"),
]

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
