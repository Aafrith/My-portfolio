import React from 'react';
import Header from '../../components/Header';
import Intro from './intro';  // Ensure correct import case
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact';
import Certifications from './Certifications';
import Footer from './Footer';
import LeftSider from './LeftSider';
import { useSelector } from 'react-redux';

function Home() {
  const { portfolioData, loading } = useSelector((state) => state.root); // Correctly select loading state

  // Add logging for debugging
  console.log('portfolioData:', portfolioData);

  return (
    <div>
      <Header />
      {loading ? (
        <p>Loading...</p> // Provide feedback while data is loading
      ) : (
        portfolioData && (
          <div className='bg-primary px-40 sm:px-5'>
            <Intro />
            <About />
            <Experiences />
            <Projects />
            <Certifications />
            <Contact />
            <Footer />
            <LeftSider />
          </div>
        )
      )}
    </div>
  );
}

export default Home;
