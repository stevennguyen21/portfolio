import React from 'react';
import '../scss/main.scss';
import Mainpage from './Mainpage.jsx';
import Home from './Home.jsx';

const App = () => {
    return (
        <div className="background">
            <Mainpage />
            <Home />
        </div>
    )
}

export default App;