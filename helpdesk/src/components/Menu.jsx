import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <div className="" >
                <header>
                    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                        <h5 className="my-0 mr-md-auto font-weight-normal">Poli Dynamics</h5>
                        <nav className="my-2 my-md-0 mr-md-3">
                            <a className="p-2 text-dark" href="#">Home</a>
                            <a className="p-2 text-dark" href="#">Availability</a>
                            <a className="p-2 text-dark" href="#">About us</a>
                            <a className="p-2 text-dark" href="#">Who we serve </a>
                            <a className="p-2 text-dark" href="#">Our services </a>
                        </nav>
                        <a className="btn btn-outline-primary" href="#">Sign up</a>
                    </div>
                </header>
            </div>

        );
    }
}

export default Menu;
