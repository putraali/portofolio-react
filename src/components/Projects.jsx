
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { portfolioList } from '../data/DataPortfolio';

// eslint-disable-next-line react/prop-types
const Projects = ({ isPreview = false }) => {
  const displayProjects = isPreview ? portfolioList.slice(0, 4) : portfolioList;

  return (
    <section className={`container position-relative z-1 ${isPreview ? 'py-5 mt-5' : 'py-5'}`}>
      {isPreview && (
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 gap-3">
            <div>
                <span className="text-barbatos-red fw-bold text-uppercase small" style={{letterSpacing: '0.2em'}}>Selected Works</span>
                <h2 className="display-5 fw-bold text-white mt-2">Featured Projects.</h2>
            </div>
            <Link to="/projects" className="d-none d-md-flex align-items-center gap-2 btn btn-outline-light rounded-pill px-4 py-2 fw-bold text-decoration-none">
                View All Projects <ArrowRight size={18} />
            </Link>
        </div>
      )}
      
      <div className="row g-4 g-md-5">
        {displayProjects.map((project, idx) => (
          <div key={project.id || idx} className="col-md-6" style={{cursor: 'pointer'}}>
            <div className="card border-0 bg-transparent text-light h-100">
              <div 
                className="card-img-top rounded-4 position-relative overflow-hidden shadow-lg mb-3" 
                style={{aspectRatio: '4/3', backgroundColor: '#111'}}
              >
                 <img src={project.image} alt={`Project ${idx + 1}`} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                 <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25" style={{ transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.25'}></div>
              </div>
              
              <div className="card-body p-0">
                <h3 className="card-title h4 fw-bold text-white mb-2">Project Karya {idx + 1}</h3>
                <div className="d-flex align-items-center gap-3 text-secondary">
                    <span className="small fw-bold text-uppercase text-barbatos-gold">Portfolio</span>
                    <span className="rounded-circle bg-secondary" style={{width:'4px', height:'4px'}}></span>
                    <p className="small mb-0 text-truncate">Desain visual dan digital</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isPreview && (
        <div className="mt-5 text-center d-md-none">
             <Link to="/projects" className="btn btn-outline-light rounded-pill px-4 py-3 fw-bold d-inline-flex align-items-center gap-2 text-decoration-none w-100 justify-content-center">
                View All Projects <ArrowRight size={18}/>
            </Link>
        </div>
      )}
    </section>
  );
};

export default Projects;