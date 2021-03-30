import React from 'react';
import '../scss/main.scss';
import Mainpage from './Mainpage.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className="background">
                <Mainpage />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About} />
                </Switch>
            </div>

        </Router>
    )
}

export default App;