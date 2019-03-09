import React from 'react'
import { StyledUl } from './List.styles'

export default function List(props) {

    const listChar = props.starwarsChars.map( char => {
        return (
          <StyledUl key={char.name}>
              <li>
                <h1>{char.name}</h1>
                <p>{char.eyeColor}</p>
                <p>{char.gender}</p>
                <p>{char.height}</p>
              </li>
            </StyledUl>
        )
    })

  return (
    <div>
      {listChar}
    </div>
  )
}
