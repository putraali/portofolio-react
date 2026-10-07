import Hero from '../components/Hero';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <>
      <Hero />
      <Projects isPreview={true} />
    </>
  );
};

export default Home;