import React from 'react'
import { Row } from 'react-bootstrap'
import CardMovie from './CardMovie'
import Paginations  from './Paginations'
const MoviesLists = ({movies , getPageMovie , maxpage}) => {
  return (
    <Row className='mt-3'> 
    {
      movies.length >=1 ? (
        movies.map((move) => {
          return(
            <CardMovie key={move.id} move={move} />
          )
        })
      ) : <h1 className='text-center pt-5'>No DaTa ...</h1>
    }

        <Paginations maxpage={maxpage} getPageMovie={getPageMovie}/>
    </Row>
  )
}

export default MoviesLists
