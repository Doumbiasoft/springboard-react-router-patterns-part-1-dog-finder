import React from 'react';
import { Link } from 'react-router-dom';
import './DogList.css'

export default function DogList(props) {
    const dogLinks = props.dogs.map((dog) => (
      <div className='DogList-card'>
        <Link to={`/dogs/${dog.name.toLowerCase()}`}>
        <div className='DogList-card-item' key={dog.name}>
              <div className=''>
                <img className='DogList-profile-img' alt={dog.name} src={dog.src}/>
              </div>
              <div className=''>
              <h3>
                {dog.name}
              </h3>
            </div>
         </div>
        </Link>
      </div>
     
      ));
      return (
        <div className='DogList'>
          <h1>Dog List</h1>
          {dogLinks}
        </div>
      );
}
