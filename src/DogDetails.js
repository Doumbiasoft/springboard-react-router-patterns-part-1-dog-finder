import React from 'react';
import { useParams } from 'react-router-dom';
import './DogDetails.css'

export default function DogDetails({ dogs }) {
  
    const { name } = useParams();
    const dog = dogs.find((dog) => dog.name.toLowerCase() === name);

    if (!dog) {
        return <h1>Dog not found</h1>;
    }
    return (
        <div>
          <h1>{dog.name}</h1>
          <img src={dog.src} alt={dog.name} />
          <p>Age: {dog.age}</p>
          <h2>Facts</h2>
          <ul>
            {dog.facts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>
      );
}
