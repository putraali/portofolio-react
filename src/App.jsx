import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import Contact from './pages/Contact';

const NotFound = () => (
  <div className="vh-100 d-flex flex-column align-items-center justify-content-center bg-barbatos-frame text-white">
    <h1 className="display-1 fw-bold text-barbatos-red">404</h1>
    <p className="lead text-secondary mt-3">Halaman tidak ditemukan.</p>
  </div>
);

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<AllProjects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;