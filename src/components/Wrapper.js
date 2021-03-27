import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Wrapper(props) {
    return (
        <React.Fragment>
            <Header />
            <div className="wrapper">
                {props.children}
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Wrapper;