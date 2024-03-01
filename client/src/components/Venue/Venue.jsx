import React, { useState } from 'react';
import './Venue.css'
const Skills = () => {

    return (
        <>
            <h2>Venue</h2>
            <section className="venue media" id="venue">

                <div className='details'>
                    <p className='address'>
                        <h3>
                            Address
                        </h3>
                        <p>VIT,Bhimavaram</p>
                    </p>
                    <p className='timing'>
                        <h3>Timing</h3>
                        <p>9AM to 6PM</p>
                    </p>
                </div>
                <div className='details2'>
                    <img src="./images/vit-audi.jpg" alt="" />
                </div>
            </section>
        </>

    );
};

export default Skills;
