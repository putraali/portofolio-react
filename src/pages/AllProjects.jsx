import Projects from '../components/Projects';

const AllProjects = () => {
  return (
    <div className="pt-5 mt-5 pb-5 min-vh-100">
       <div className="container text-center mb-5 mt-5">
          <h1 className="display-4 fw-bold text-white mb-3">Portfolio Karya</h1>
          <p className="lead text-secondary mx-auto" style={{maxWidth: '600px'}}>
            Berikut adalah kumpulan proyek lengkap yang telah saya kerjakan, mencakup desain UI/UX, pengembangan Mobile Apps, dan Website.
          </p>
      </div>
      <Projects isPreview={false} />
    </div>
  );
};

export default AllProjects;