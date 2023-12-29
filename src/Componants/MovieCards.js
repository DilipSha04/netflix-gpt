import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCards = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="md:w-40 w-20 px-2">
      <img className="" src={IMG_CDN_URL + posterPath} alt="Movie Card" />
    </div>
  )
}

export default MovieCards
