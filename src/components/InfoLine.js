import React from 'react'

export const InfoLine = () => {
  return (
    <section className='infoLine'>
      <ul className='infoWrapper'>
        <li className='infoItem'>
          <p className='infoNumber'>10</p>
          <p>Countries Visited</p>
        </li>
        <li className='infoItem'>
          <p className='infoNumber'>2</p>
          <p>Continents Visited</p>
        </li>
        <li className='infoItem'>
          <p className='infoNumber'>20</p> 
          <p>Torn Pairs of Shoes</p>
        </li>
        <li className='infoItem'>
          <p className='infoNumber'>15</p>
          <p>Lost Backpacks</p>
        </li>
      </ul>
    </section>
  )
}