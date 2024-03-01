// Achievement.js
import React from 'react';

const Achievement = ({ Name,ImageUrl,Description }) => {
  return (
    <div className="complete-card">
      <div className="achievement-card">
        <div className="achievement-content">
          <div className="front">
            <img src={`./Organisers/${ImageUrl}`} />
          </div>
          <div className="back">
            <div className="content">{Description}</div>
          </div>
        </div>
      </div>
      <p>{Name}</p>
    </div>
  );
};

export default Achievement;
