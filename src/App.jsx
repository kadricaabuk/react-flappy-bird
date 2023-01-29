import React, { useState } from 'react'
import {Menu, GameCanvas} from './components'

function App() {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  return (
    <div>
      <Menu isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} score={score} highScore={highScore}/>
      <GameCanvas isMenuOpened={isMenuOpened}/>
    </div>
  )
}

export default App