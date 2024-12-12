import React, { useEffect, useState } from 'react';
import '../assets/styles/About.css';
import '../assets/styles/App.css';
import logo from '../assets/images/dreamer-1-Alternate.png';

const About = (props) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 200); // Delay before text starts to fade in
    return () => clearTimeout(timeout);
  }, []);

  // Inline styles for animation
  const fadeInStyle = {
    opacity: fadeIn ? 1 : 0,
    transform: fadeIn ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 1.5s ease, transform 1.5s ease',
  };

  // Inline styles for headings with hover effect
  const headingStyle = {
    color: '#8b94c2',
    transition: 'color 0.3s ease',
  };

  const handleHeadingMouseEnter = (e) => {
    e.target.style.color = '#e5f33d'; // Bright Yellow
  };

  const handleHeadingMouseLeave = (e) => {
    e.target.style.color = '#8b94c2'; // Default Purple
  };

  return (
    <div>
      <h1
        className="font-bold"
        style={{ ...fadeInStyle, ...headingStyle }}
        onMouseEnter={handleHeadingMouseEnter}
        onMouseLeave={handleHeadingMouseLeave}
      >
        About Us
      </h1>

      <div
        className="w-[90vw] md:w-[60vw] text-center md:text-lg"
        style={fadeInStyle}
      >
        <h3
          className="text-2xl mb-2 text-purpleMedium"
          style={headingStyle}
          onMouseEnter={handleHeadingMouseEnter}
          onMouseLeave={handleHeadingMouseLeave}
        >
          While We Were Dreaming
        </h3>
        <p>
          <i>While We Were Dreaming</i> was created to bridge the disconnect often felt on an open-city campus like NYU.
          By pinning personal moments to a dynamic, anonymous map, all NYU students (past, present, and future) can reflect on their college journey and
          explore the memories of others.
          <br />
          <br />
          The name, <i>While We Were Dreaming</i>, is inspired by the iconic
          "Dream Until It's Your Reality" graffiti that can be found scattered everywhere among campus and other places in the city
          that is often one of the first sights that greets students upon their arrival in New York. It resonates with the spirit of
          NYU, where the city and campus serve as the backdrop for countless dreams — thus, one can say this platform serves as a collective
          of all our memories and the things we did here "while we were dreaming".
        </p>
        <br />
        <h3
          className="text-2xl mb-2 text-purpleMedium"
          style={headingStyle}
          onMouseEnter={handleHeadingMouseEnter}
          onMouseLeave={handleHeadingMouseLeave}
        >
          Meet The Team
        </h3>
        <p>
          <i>While We Were Dreaming</i> was created by Team Dreamers, a group of six NYU students blending design and technology to bring campus memories to life.
          Explore our individual contributions and work on{' '}
          <a
            className="underline"
            href="https://github.com/agiledev-students-fall2024/4-final-project-while-we-were-dreaming"
          >
            GitHub
          </a>
          .
        </p>
      </div>
      <br />
      <br />
      <div className="aboutpg-buttoncontainer" style={fadeInStyle}>
        <button
          type="button"
          className="feedback-btn"
          onClick={() => (window.location.href = '/feedback')}
        >
          Feedback
        </button>
        <button
          type="button"
          className="contact-btn"
          onClick={() => (window.location.href = '/contact')}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default About;
