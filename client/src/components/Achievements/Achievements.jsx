// MainComponent.js
import React from 'react';
import Achievement from './Achievement';
import { data } from './AchievementsData.js';

const MainComponent = () => {
  return (
    <>
      <h2 className="section__title organizers" style={{ color: '#319DC4' }}>Organizers</h2>
      <section className="section achievements_section" id="teams">

        <div className="achievements-container">
          {data.map((achievement, index) => (
            <Achievement key={index} {...achievement} />
          ))}
        </div>
      </section>
    </>

  );
};

export default MainComponent;
