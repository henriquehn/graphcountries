import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './pages/Landing';
import CardList from './pages/CardList';

function Routes()
{
    return (
        <BrowserRouter>
            <Route path='/' exact component={LandingPage} />
            <Route path='/CardList' component={CardList} />
        </BrowserRouter>
    );
}

export default Routes;