import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackgorund from './VideoBackgorund'

const MainContainer = () => {

  const movies = useSelector((store) => store.movies?.nowPlayingMovies)

  if(!movies) return; 

  const mainMovie = movies[0]
  console.log(mainMovie)

  return (
    <div>
      <VideoTitle/>
      <VideoBackgorund/>
    </div>
  )
}

export default MainContainer