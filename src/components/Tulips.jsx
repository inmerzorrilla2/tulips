import React from 'react'

const Tulips = ({name, color, image}) => {
  return (
    <section>
        <h2>{name}</h2>
        <p>{color}</p>
        <img src={image} alt={name} />
    </section>
  )
}

export default Tulips
