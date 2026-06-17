import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/Constants'

const GptSearch = () => {
  return (
    <div className="min-h-screen overflow-x-hidden" >
      <div className="fixed inset-0 -z-10">
        <img
          src={BG_URL}
          alt="logo"
          className="h-screen w-screen object-cover"
        />
      </div>
      <div className="relative z-10">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  )
}

export default GptSearch