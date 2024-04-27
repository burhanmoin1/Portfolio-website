import React from 'react';
import Header from './Header';
import FirstContainer from './FirstContainer';
import SecondContainer from './SecondContainer';
import ThirdContainer from './ThirdContainer';

function Homepage() {
    return (
        <React.Fragment>
            <Header />
            <FirstContainer />
            <SecondContainer />
            <ThirdContainer />
        </React.Fragment>
    );
}

export default Homepage;