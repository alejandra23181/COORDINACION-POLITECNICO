import React from "react";
import '../../components/styles/Nosotros.scss';
import Presentacion from "../../components/Presentacion/Presentacion";
import C1 from '../../components/images/nosotros/mision.PNG';
import C2 from '../../components/images/nosotros/vision.PNG';

export default function Nosotros() {
    const data = [
        { image: C1, title: 'MISIÓN', content: 'Somos una Institución de educación superior estatal de vocación tecnológica, que con su talento humano ofrece una formación integral con programas de calidad en pregrado y posgrado, apoyados en la gestión del conocimiento de base científica; promovemos acciones innovadoras desde la investigación y la proyección social, para contribuir al desarrollo económico, social y ambiental de Antioquia y Colombia.' }
        , { image: C2, title: 'VISIÓN', content: 'El Politécnico Colombiano Jaime Isaza Cadavid, siempre será reconocido como una institución de alta calidad académica con énfasis en la formación y gestión tecnológica, la investigación aplicada y la proyección social, en beneficio del desarrollo económico, social y ambiental, con presencia en las regiones de Antioquia y el País; articulado a las dinámicas del sector productivo, a la política pública y al crecimiento de la cobertura en educación.' }
    ]

    return (

        <main className="cp-nosotros" >
            <div className="cp-container" >
                <article className='cp-article' >
                    <h4>ACERCA DE NOSOTROS</h4>
                </article>
                <div className="cp-nuevos">
                    <Presentacion data={data} />
                </div>
            </div>
        </main>

    )
}