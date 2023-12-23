import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCards = ({posterPath}) => {
  return (
    <div className="w-40 px-2">
      <img className=" transition-all duration-300" src={IMG_CDN_URL + posterPath} alt="Movie Card" />
    </div>
  )
}

export default MovieCards
