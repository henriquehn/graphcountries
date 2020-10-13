import React from 'react';
import {Link} from 'react-router-dom';

import globeImage from '../../assets/images/clipart/globe.svg';
import './styles.css';

function LandingPage()
{
    return (
        <div className="landing-page">
            <div className="content">
                Página de testes da API GraphCountries. Clique no globo para começar.
            </div>
            <div className="container-buttons">
                <Link to="/CardList" className="list-cards">
                    <img src={globeImage} alt="Listar cartões dos países"/>
                </Link>
            </div>
        </div>
    );
}

export default LandingPage