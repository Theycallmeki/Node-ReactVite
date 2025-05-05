import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

import Create from './crud/Create.tsx';
import Read from './crud/Read.tsx';
import Update from './crud/Update.tsx';
import Delete from './crud/Delete.tsx';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
