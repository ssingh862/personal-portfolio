// Routes.js

import React from 'react';
import { Route } from 'react-router-dom';
import Works from './Work';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';


const Routes = () => {
    return (
        <div>
            <Route path="/works" exact component={Works} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
        </div>
    );
};

export default Routes;
