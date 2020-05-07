import React from 'react';
import './Carrusel.scss';
import C1 from '../images/carrusel/c1.jpg';
import C2 from '../images/carrusel/c2.jpg';
import C3 from '../images/carrusel/c3.png';
import C4 from '../images/carrusel/c4.png';

function Carrusel() {
    const arrayC = [C1, C2, C3, C4]
    return (
        <div className="cp-carrusel container">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    {arrayC.map( (item, index) => (
                        <div className={index == 0 ? "item active": "item"} key={index} >
                            <img src={item} alt="Los Angeles"  />
                        </div>
                    )  )}
                </div>
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </div>
    )
}

export default Carrusel;