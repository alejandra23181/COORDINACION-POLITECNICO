import React from 'react';
import '../styles/Presentacion.scss';

function Presentacion({data}) {
    return (
        <section className='cp-presentacion'>

            {data.map( (d, index) => (
                <div className='cp-container' key={index} >
                    <div className='cp-cover'>
                        <img src={d.image} alt={d.title} />
                    </div>
                    <div className='cp-body'>   
                        <h3>{d.title} </h3>
                        <article>
                            <p>{d.content}</p>
                        </article>
                    </div>
                </div>
            ))}

        </section>
    );
}

export default Presentacion;