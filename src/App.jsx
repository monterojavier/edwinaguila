import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Actor from './pages/Actor';
import Credits from './pages/Credits';
import Headshots from './pages/Headshots';
import Music from './pages/Music';
import Portfolio from './pages/Portfolio';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/actor" element={<Actor />} />
      <Route path="/credits" element={<Credits />} />
      <Route path="/headshots" element={<Headshots />} />
      <Route path="/music" element={<Music />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}
