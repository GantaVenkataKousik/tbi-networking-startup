import React, { useState } from 'react';
import './Agenda.css'
import {day1} from './day1.js';
import {day2} from './day2.js';
const Agenda = () => {
    return (
        <>
            <h2>Agenda</h2>
            <section className="agenda" id="agenda">
                <div className='day1'>
                    <h3>DAY - 1</h3>
                    <div className='mainTable'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Start Time</th>
                                    <th>End Time</th>
                                    <th>Program</th>
                                </tr>
                            </thead>
                            <tbody>
                            {day1.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.start}</td>
                                        <td>{item.end}</td>
                                        <td>{item.program}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='day2'>
                    <h3>DAY - 2</h3>
                    <div className='mainTable'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Start Time</th>
                                    <th>End Time</th>
                                    <th>Program</th>
                                </tr>
                            </thead>
                            <tbody>
                            {day2.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.start}</td>
                                        <td>{item.end}</td>
                                        <td>{item.program}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Agenda;
