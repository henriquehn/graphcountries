import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/images/buttons/white/home.svg';
import './styles.css';
import PageHeaderInterface from './PageHeaderInterface';

const PageHeader:React.FC<PageHeaderInterface> = (prop) =>
{

    function OnSearch(value: React.ChangeEvent<HTMLInputElement>)
    {
        if (prop.OnChange != null)
        {
            prop.OnChange(value);
        }
    }

    return (
        <div className="top-bar">
            <Link to="/" className="top-bar-image-button">
                <img src={homeIcon} alt="Home"/>
            </Link>
            <input
                type="search"
                className="search-box"
                placeholder="search"
                onChange={(e)=>{OnSearch(e)}}
            />
        </div>
    );
}

export default PageHeader