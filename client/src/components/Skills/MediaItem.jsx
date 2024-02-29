import React, { useState } from 'react';

const MediaItem = ({imageName}) => {

  return (
    <div className='mediaItem'>
        <img src={`./images/${imageName}`} alt="" />
        <h3>{name}</h3>
    </div>
  );
};

export default MediaItem;
