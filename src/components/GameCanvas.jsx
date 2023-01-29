import React from 'react'
import Pipe from './Pipe'

export default function GameCanvas({}) {
  return (
    <div className="GameContainer">
        <canvas className='GameCanvas' width={400} height={600}>
            <Pipe />
        </canvas>
        <p className="ScoreDisplay">0</p>
    </div>
  )
}
