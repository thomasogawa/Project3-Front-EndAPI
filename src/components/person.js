import React from 'react';

export default function Person({ name , image}) {
    return (
        <div>
        <img src = {image} alt = {name} />
        <h1>{name}</h1>
        </div>
        );
    }