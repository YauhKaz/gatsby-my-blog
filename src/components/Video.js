import React from 'react'

import video from '../assets/video/test.mp4'

export const Video = ({poster}) => {
  return (
    <div>
      <video autoPlay loop muted playsInline poster={poster} preload="auto">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}