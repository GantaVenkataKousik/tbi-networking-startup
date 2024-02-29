import React from "react";
import './Designer.css'

const Designer = () => {
    return (
        <div className="developer">

            <div >
                <h1>DESIGNER</h1>
                <div className="details">
                    <div className="socialProfiles">
                        <h2>Linked In : <span><a href="">Venkatakousik</a></span></h2>
                        <h2>Github : <span><a href="">GantaVenkataKousik</a></span></h2>
                        <h2>Contact : <span className="number">+91 7337066524</span></h2>
                        <h2>Role : <span><a href="">Full Stack Developer</a></span></h2>
                    </div>
                    <img src="./persons/gvk.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Designer;