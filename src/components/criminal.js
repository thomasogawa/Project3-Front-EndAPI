import React from 'react';

export default function Criminal({ name , image}) {
    return (
        <div>
        <img src = {image} alt = {name} />
        <h1>{name}</h1>
        </div>
        );
    }