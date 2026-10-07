
import { Phone, Mail, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-barbatos-frame py-5 border-top border-dark text-secondary">
      <div className="container">
        <div className="row gy-4 mb-5">

          <div className="col-md-4">
            <h3 className="h3 fw-bold text-white mb-3">Uknown <span className="text-barbatos-red">Project</span>.</h3>
            <p className="small lh-lg">
              Menciptakan pengalaman digital yang bermakna melalui desain yang bersih dan kode yang efisien.
            </p>
          </div>

          <div className="col-md-4">
            <h4 className="h5 text-white fw-bold mb-3">Contact Info</h4>
            <div className="d-flex align-items-center gap-3 mb-2">
              <Phone size={18} className="text-barbatos-gold" />
              <span className="small">0896-6825-0177</span>
            </div>
            <div className="d-flex align-items-center gap-3 mb-2">
              <Mail size={18} className="text-barbatos-gold" />
              <span className="small">putraaliperdana@gmail.com</span>
            </div>
            <div className="d-flex align-items-center gap-3 mb-2">
              <MapPin size={18} className="text-barbatos-gold" />
              <span className="small">Kawali, Ciamis, Jawa Barat</span>
            </div>
          </div>

          <div className="col-md-4">
            <h4 className="h5 text-white fw-bold mb-3">Socials</h4>
            <div className="d-flex gap-3">
              <a href="#" className="p-2 bg-dark rounded text-secondary hover-barbatos-red transition"><Github size={20} /></a>
              <a href="#" className="p-2 bg-dark rounded text-secondary hover-barbatos-red transition"><Linkedin size={20} /></a>
              <a href="#" className="p-2 bg-dark rounded text-secondary hover-barbatos-red transition"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-top border-dark pt-4 text-center small text-muted">
          &copy; {new Date().getFullYear()} Uknown Project Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;