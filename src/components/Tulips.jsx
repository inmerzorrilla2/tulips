import React from 'react'

const Tulips = ({name, color, image}) => {
  return (
    <section>
        <h2>{name}</h2>
        <p>{color}</p>
        <img src={image} alt={name} />
        <p>****31 de mayo del 2024...</p>
    </section>
  )
}

export default Tulips
