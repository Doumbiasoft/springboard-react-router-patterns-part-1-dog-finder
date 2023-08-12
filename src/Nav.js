import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav(props) {
    const dogLinks = props.dogs.map((dog) => (
        <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
          {dog.name}
        </NavLink>
      ));

  return (
      <nav className='Nav'>
        <NavLink exact to="/dogs">
          Home
        </NavLink>
        {dogLinks}
      </nav>
    );
}
