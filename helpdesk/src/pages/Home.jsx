import React from 'react';
import Menu from '../components/Menu'
import './styles/Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="" >
               <Menu />
                <main role="main">
                    <section className="jumbotron text-center">
                        <div className="container">
                            <h1>Poli Dynamics</h1>
                            <p className="lead text-muted">Poli Dynamic has an option for any member of the educational community, this is "Availability", in which you can find out the hours and availability of the computer rooms.</p>
                            <p>
                                <a href="#" className="btn btn-primary my-2">Go to Availability</a>
                            </p>
                        </div>
                    </section>
                </main>
            </div>

        );
    }
}

export default Home;
