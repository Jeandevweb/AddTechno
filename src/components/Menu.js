import React from 'react';
import{ NavLink } from 'react-router-dom';



const Menu = () => {
    return (
        <div className='menu'>
            <ul>
                <li><NavLink to='/' className={({isActive})=>(isActive ? 'active-link' : undefined)}>Home</NavLink></li>
                <li><NavLink to='/add' className={({isActive})=>(isActive ? 'active-link' : undefined)}>Ajouter Techno</NavLink></li>
                <li><NavLink to='/list' className={({isActive})=>(isActive ? 'active-link' : undefined)}>Toutes les technos</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;