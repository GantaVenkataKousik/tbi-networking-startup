import React from 'react';

const CardComponent = ({ data }) => {
  return (
    <div>
      {data.map((person, index) => (
        <div className='card' key={index}>
          <img src={person.imageUrl} alt={person.name} />
          <h3>{person.name} <span>Sir</span></h3>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
