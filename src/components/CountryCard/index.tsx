import React from 'react';
import './styles.css';
import CountryCardInterface from './CountryCardInterface';

const CountryCard:React.FC<CountryCardInterface> = (props) =>
{
    return (
        <article className="country-card">
            <div className="country-flag">
                <img src={props.Country.flag.svgFile} alt={"Bandeira: " + props.Country.name}/>
            </div>
            <div className="country-name">
                {props.Country.name}
            </div>
            <div className="country-native-name">
                {"(" + props.Country.nativeName + ")"}
            </div>
            <div className="country-capital-name">
                {props.Country.capital}
            </div>
        </article>
    );
}

export default CountryCard