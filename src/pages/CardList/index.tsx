import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader'
import './styles.css';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import CountryCard from '../../components/CountryCard';
import CountryQueryResult from './CountryQueryResult';
  
const COUNTRY_QUERY = gql`
    {
        Country
        {
            name
            nativeName
            capital
            flag
            {
                svgFile
            }
        }
    }
`;

function CardList()
{
    const [countryToSearch, setCountryToSearch] = useState('');
    const { loading, error, data } = useQuery<CountryQueryResult>(COUNTRY_QUERY);

    function OnSearch(value: React.ChangeEvent<HTMLInputElement>)
    {

        setCountryToSearch(value.target.value.toLocaleLowerCase());
    }

    function ParseCountries(queryResults: CountryQueryResult | undefined):JSX.Element[]
    {
        var result=[<></>];
        if (loading)
        {
            result = [<p>Carregando a lista de países, aguarde...</p>]
        }
        else if (error)
        {
            result = [<p>Não foi possível carregar a lista de países.</p>]
        }
        else if (queryResults == null || queryResults.Country == null || queryResults.Country.length < 1)
        {
            result = [<p>A lista de países está vazia.</p>]
        }
        else
        {
            if (countryToSearch!==null && countryToSearch !== '')
            {
                result=queryResults.Country.filter(country => country.name.toLocaleLowerCase().includes(countryToSearch)).map((currentCountry, index) =>
                    (
                        <CountryCard key={index} Country={currentCountry}/>
                    )
                )
                if (result.length <1)
                {
                    result = [<p>Não foi encontrado nenhum resultado para o critério especificado</p>]
                }
            }
            else
            {
                result=queryResults.Country.map(currentCountry => (<CountryCard key={currentCountry.name} Country={currentCountry}/>));
            }
        }
        return result;
    }

    return (
        <div id="card-list">
            <div id="cardlist-page-header">
                <PageHeader OnChange={(e)=>{OnSearch(e)}}/>
            </div>
            <div id="cardlist-page-content">
                {ParseCountries(data)}
            </div>
        </div>
    );
}

export default CardList