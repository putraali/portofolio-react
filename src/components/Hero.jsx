import { Download, Linkedin, Instagram, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

import AliImg from '../assets/Ali.jpg';

const Hero = () => {
  return (
    <section id="home" className="container pt-5 mt-5 pb-5 min-vh-100 d-flex align-items-center">
      <div className="row align-items-center w-100">
        <div className="col-md-6 mb-5 mb-md-0">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-barbatos-frame border border-secondary text-light small mb-4 shadow-sm">
            <Sparkles size={16} className="text-barbatos-gold" />
            <span>Available for Freelance Projects</span>
          </div>
          
          <h1 className="display-3 fw-bold text-white lh-1 mb-4">
            Visualizing <br/>
            Ideas into <br/>
            <span className="text-barbatos-red fst-italic">Masterpieces.</span>
          </h1>
          
          <p className="lead text-secondary mb-5">
            Hi, I am <span className="text-white fw-bold">Putra Ali Perdana</span>. A passionate Graphic Designer and Visual Artist crafting bold, impactful, and premium digital experiences.
          </p>
          
          <div className="d-flex flex-wrap gap-3 mb-5">
            <button className="btn btn-primary-barbatos rounded-pill px-4 py-3 fw-bold d-flex align-items-center gap-2 shadow-lg">
              <Download size={20} /> Download Resume
            </button>
            <Link to="/projects" className="text-decoration-none">
              <button className="btn btn-outline-light rounded-pill px-4 py-3 fw-bold d-flex align-items-center gap-2">
                  Explore Work <ArrowRight size={18} />
              </button>
            </Link>
          </div>
          
          <div className="d-flex gap-3 align-items-center text-secondary">
            <span className="small fw-bold text-uppercase me-2 text-barbatos-gold">Connect</span>
            <a href="#" className="bg-barbatos-frame border border-secondary rounded-circle d-flex align-items-center justify-content-center p-3 text-white shadow-sm hover-barbatos-red transition text-decoration-none" style={{ cursor: 'pointer', width: '50px', height: '50px' }}>
              <Linkedin size={20} />
            </a>
            <a href="#" className="bg-barbatos-frame border border-secondary rounded-circle d-flex align-items-center justify-content-center p-3 text-white shadow-sm hover-barbatos-red transition text-decoration-none" style={{ cursor: 'pointer', width: '50px', height: '50px' }}>
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="col-md-6 d-flex justify-content-center">
          <div className="bg-barbatos-frame border border-secondary rounded-4 p-2 shadow-lg" style={{ width: '340px', height: '460px', position: 'relative' }}>
             <div className="w-100 h-100 bg-black rounded-4 overflow-hidden position-relative d-flex align-items-center justify-content-center border border-secondary">
                <img src={AliImg} alt="Putra Ali Perdana" className="w-100 h-100" style={{ objectFit: 'cover' }} />
             </div>
             
             {/* Floating badge */}
             <div className="position-absolute bottom-0 start-0 translate-middle bg-barbatos-frame px-4 py-3 rounded-4 d-flex align-items-center gap-3 shadow-lg border border-secondary" style={{ marginBottom: '-20px', marginLeft: '20px' }}>
                <div className="bg-barbatos-gold rounded-circle" style={{ width: '12px', height: '12px' }}></div>
                <div>
                  <p className="text-white fw-bold mb-0">5+ Years</p>
                  <p className="text-secondary small text-uppercase mb-0" style={{ letterSpacing: '0.1em' }}>Experience</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;