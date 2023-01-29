import React from 'react'

function Menu({isMenuOpened, setIsMenuOpened, score, highScore}) {
    function restartGame() {
        console.log('restart')
        setIsMenuOpened(false)
    }
  return (
    <div className={`MenuWrapper ${isMenuOpened ? "active" : ""}`}>
        <div className="Menu">
            <h3>Game Over</h3>
            <p>Score: <span>{score}</span></p>
            <p>High Score: <span>{highScore}</span></p>
            <button onClick={restartGame}>Restart</button>
        </div>
    </div>
  )
}

export default Menu