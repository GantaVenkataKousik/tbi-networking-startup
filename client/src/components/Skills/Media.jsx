import React, { useState } from 'react';
import SkillItem from './SkillItem';
import './Media.css'
const Skills = () => {
  const data = [
    {
      name: 'Mr . Aditya Vissam Sir',
      imageUrl: 'Aditya Vissam.jpeg'
    },
    {
      name: 'Mr . Suresh Krishna Sir',
      imageUrl: 'Suresh_krishna_ISB.jpeg'
    },
    {
      name: 'Mr . Divakar Subramaniam Sir',
      imageUrl: 'Divakar Subramaniam.png'
    },
    {
      name: 'Mrs . Madhura Rajan Mam',
      imageUrl: 'mr.jpg'
    },
    {
      name: 'Mr . Kaushik Rajan Sir',
      imageUrl: 'Kaushik Rajan_lawyer.jpeg'
    },
    {
      name: 'Mr . Ramesh Rao Sir',
      imageUrl: 'Ramesh Rao.jpeg'
    },
  ];

  return (
    <>
      <h2>Guests</h2>
      <section className="guests media media-con" id="media">

        <div className="media-container">
          {data.map((person, index) => (
            <div className='card' key={index}>
              <img src={`./Guests/${person.imageUrl}`} alt={person.name} />
              <h3>{person.name} <span></span></h3>
            </div>
          ))}
        </div>
      </section>
    </>

  );
};

export default Skills;
