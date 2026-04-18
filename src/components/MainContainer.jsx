import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackgorund from './VideoBackgorund'

const MainContainer = () => {

  const movies = useSelector((store) => store.movies?.nowPlayingMovies)

  if(!movies) return; 
 
  const mainMovie = movies[0]
  console.log(mainMovie)

  const {original_title, overview , id }= mainMovie 
  console.log(original_title)
  console.log(overview)

  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackgorund movieID={id}/>
    </div>
  )
}

export default MainContainer