import React from 'react';
import Carrusel from '../../components/Carrusel/Carrusel';
import '../../components/styles/home.scss';


export default function Home() {


    return (
        <main className="cp-home" role="main">
            <Carrusel />
            <section className='cp-home-container'>
                <article className='cp-article' >
                    <h3>SERVICIOS Y SOLUCIONES PARA TODA LA COMUNIDAD EDUCATIVA</h3>
                </article>
                <div className="cp-contenedor">
                    <div class="row mb-2">
                        <div class="col-md-6">
                            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div class="col p-4 d-flex flex-column position-static">
                                    <strong class="d-inline-block mb-2 text-primary">Administrativos</strong>
                                    <h3 class="mb-0">Guías para técnicos</h3>
                                    <div class="mb-1 text-muted">En proceso</div>
                                    <p class="card-text mb-auto">En este articulo podras conocer como hacer uso de la plataforma de administrativos este de manera fácil y sencilla.</p>
                                    <a href="#" class="stretched-link">Continuar leyendo</a>
                                </div>
                                <div class="col-auto d-none d-lg-block">
                                    <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#e3e3e3" /><text x="50%" y="50%" fill="#000" dy=".3em"></text></svg>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div class="col p-4 d-flex flex-column position-static">
                                    <strong class="d-inline-block mb-2 text-primary">Comunidad</strong>
                                    <h3 class="mb-0">Guías para docentes</h3>
                                    <div class="mb-1 text-muted">En proceso</div>
                                    <p class="card-text mb-auto">En este articulo podras conocer como hacer uso de la plataforma de docentes este de manera fácil y sencilla.</p>                                    <a href="#" class="stretched-link">Continuar leyendo</a>
                                </div>
                                <div class="col-auto d-none d-lg-block">
                                    <svg class="bd-placeholder-img" width="200" height="250" src="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#e3e3e3" /><text x="50%" y="50%" fill="#000" dy=".3em"></text></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );

}