import React from 'react'
import '../cards/cards.css'

const Card = ({
    imgSrc,
    imgAlt,
    title,
    description,
    buttonText,
    link,

}) => {
  return (
    <div className='card-container'>
      <img  className='card-img' src={imgSrc} alt={imgAlt}></img>
      <h1 className='card-title'>{title}</h1>
      <p className='card-desc'>{description}</p>
      <a href={link} className='card-btn'>{buttonText}</a>
    </div>
  )
}

export default Card
