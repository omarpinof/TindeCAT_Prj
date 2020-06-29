import React from 'react'

export const Avatar = ({ image, nick }) => (
    <div className="Avatar">
        <img src= { image } />
        <p>{ nick }</p>
    </div>
)