import React from 'react';

const About = () => {


  return (
    <section className="about " id="about">
      <div className='links'>
        <div className='insta'>
          <a href="https://www.instagram.com/vishnufoundation.tbi/"><i className="fa-brands fa-instagram"></i>Vishva/insta</a>
        </div>
        <div><a href="https://www.linkedin.com/in/vishnu-foundation-tbi-362300252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><i className="fa-brands fa-linkedin"></i>Vishva/linkedin</a></div>
        <div><a href="https://www.linkedin.com/in/venkatakousik/"><i class="fa-solid fa-code"></i>GVK/linkedin</a></div>
      </div>

      <div className='resLinks'>
        <a href="https://www.instagram.com/vishnufoundation.tbi/"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/vishnu-foundation-tbi-362300252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">    <i className="fa-brands fa-linkedin"></i></a>
        <a href="https://www.linkedin.com/in/venkatakousik/"> <i class="fa-solid fa-code"></i></a>
    
     
      </div>
      <h2 className='aboutheadingres'>Registrations <span> Open</span>   <span>Hurry Up!!!</span></h2>

      <div className='buttons'>


        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeDDUX-cLwEY50X_GGtIt1NnjsI-Q-F-YQy9XE9b0CAsz1ApA/viewform">
          <button>Register Now 🎉</button>
        </a>

      </div>


      <h2 className='aboutheading'>About</h2>

      <p className="about__description">
        the innovative ventures associated with Vishva TBI converge in one vibrant event. This festival provides a unique platform for startups to come together with student innovators, fostering meaningful connections and collaborations. The highlight of the event is the networking session that seamlessly bridges the gap between startups and the aspiring minds of student innovators.
        <br />
        <br />
        From insightful workshops and interactive sessions to mentorship programs, Vishva Tech ensures that participants gain valuable insights, skills, and opportunities to propel their entrepreneurial journey. The event serves as a catalyst for the exchange of ideas, knowledge, and expertise, creating an environment where innovation thrives and connections flourish.
        <br />
        <br />
        In addition to networking, Vishva Tech features various initiatives that contribute to the growth of startups and the development of student innovators. These may include pitch sessions, hackathons, and collaborative projects, providing a holistic and immersive experience for all participants. With a focus on empowerment and collaboration, Vishva Tech emerges as a cornerstone for the entrepreneurial ecosystem, bringing together the diverse talents of startups and student innovators under one inspiring umbrella.
      </p>

    </section>
  );
};

export default About;