import React from "react";
import Presentacion from "../../components/Presentacion/Presentacion";
import C1 from '../../components/images/nuestros-servicios/logo-1.png';
import C2 from '../../components/images/nuestros-servicios/logo-2.png';
import C3 from '../../components/images/nuestros-servicios/logo-3.png';


export default function NuestrosServicios() {

    const data = [
        { image: C1, title: 'SOPORTE', content: 'El Politécnico Colombiano Jaime Isaza Cadavid, cuenta con una mesa de ayuda la cual resuelve todos los inconvenientes tecnológicos de software y hardware que presentan los equipos.' }
        , { image: C3, title: 'PRÉSTAMOS', content: 'Los docentes de la institución universitaria Politécnico Colombiano Jaime Isaza Cadavid, realizan préstamos de aulas y componentes electrónicos para el uso de sus clases ' }
        , { image: C2, title: 'EQUIPOS', content: 'El Politécnico Colombiano Jaime Isaza Cadavid, cuenta con computadores de escritorio, en todos los salones del primero y segundo piso del bloque número trece' }
    ]

    return (

        <main className="cp-nosotros" >
            <div className="cp-container" >
                <article className='cp-article' >
                    <h4>NUESTROS SERVICIOS</h4>
                </article>
                <Presentacion data={data} />
            </div>
        </main>
    )
}