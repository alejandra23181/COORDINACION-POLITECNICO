import React from 'react';
import Carrusel from '../../components/Carrusel/Carrusel';
import '../../components/styles/home.scss';

export default function Home() {


    return (
        <main className="cp-home" role="main">
            <Carrusel />
            <section className='cp-home-container'>
                <article className='cp-article' >
                    <h3>ACERCA DE NOSOTROS</h3>
                    <p>
                    Somos un sistema de información que te puede ayudar con estos procesos:
                    Creación de solicitudes, tareas, usuarios, manipulación de disponibilidad y reportes de
                    incidentes que se presentan en las aulas de informática,esto con el fin de poder dar solución a
                    los problemas evidenciados por los usuarios que hacen parte de la comunidad politécnica,
                    y de esta manera poder disminuir la molestia que se presenta al no dar solución a estos.
                    </p>
                </article>
                    
            </section>
        </main>
    );

}