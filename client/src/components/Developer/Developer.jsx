import React from "react";
import './Designer.css'

const Designer = () => {
    return (
        <>
            <h2 style={{marginBottom:'2rem'}}>Designer</h2>
            <div className="developer">

                <div >
                    <div className="details">
                        <div className="socialProfiles">
                            <h3>Linked In : <span className="detail"><a href="https://www.linkedin.com/in/venkatakousik/">Venkatakousik</a></span></h3>
                            <h3>Github : <span><a href="https://github.com/GantaVenkataKousik">GantaVenkataKousik</a></span></h3>
                            <h3>Contact : <span className="number">+91 7337066524</span></h3>
                            <h3>Role : <span><a href="https://www.linkedin.com/in/venkatakousik/">Full Stack Developer</a></span></h3>
                        </div>
                        <img src="./persons/gvk.png" alt="" />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Designer;