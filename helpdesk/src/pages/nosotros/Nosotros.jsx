import React from "react";
import './Nosotros.scss';
import C1 from '../../components/images/nosotros/mision.PNG';
import C2 from '../../components/images/nosotros/log.jpg';
import C3 from '../../components/images/nosotros/vision.PNG';

export default function Nosotros() {
    const array = [C1, C2, C3];
    return(
        <main className="cp-nosotros" > 
            <div className="cp-container" >
                {array.map( (item, key) => <img  src={item} key={key} /> )}
            </div>
        </main>
    )
}