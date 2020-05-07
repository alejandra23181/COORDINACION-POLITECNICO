import React from "react";
import Presentacion from "../../components/Presentacion/Presentacion";
import C1 from '../../components/images/servimos/Icon-1.svg';
import C2 from '../../components/images/servimos/Icon-2.svg';
import C3 from '../../components/images/servimos/Icon-3.svg';


export default function Servimos() {

    const data = [
        { image: C1, title: 'ADMINISTRATIVOS', content: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took.' }
        , { image: C2, title: 'PROFESORES', content: 'Los docentes de la institución universitaria Politécnico Colombiano Jaime Isaza Cadavid, realizan préstamos de aulas y componentes electrónicos para el uso de sus clases ' }
        , { image: C3, title: 'ALUMNOS', content: 'El Politécnico Colombiano Jaime Isaza Cadavid, cuenta con computadores de escritorio, en todos los salones del primero y segundo piso del bloque número trece' }
    ]

    return (
        <main className="cp-nosotros" >
            <div className="cp-container" >
                <article className='cp-article' >
                    <h4>A QUIÉN SERVIMOS</h4>
                </article>
                <Presentacion data={data} />
            </div>
        </main>
    )
}