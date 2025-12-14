import GameBody from '@/components/2)tic-tac-toe/GameBody'
import GameHeader from '@/components/2)tic-tac-toe/GameHeader'
import Image from 'next/image'
import React from 'react'

const Game = () => {
  return (
    <div className='bg-yellow-300 h-200'>
    <div className='flex-col justify-self-center 	'>
      <h1 className='text-5xl font-bold italic p-4 justify-self-center' >Tic-Tac-Toe Game</h1>
      <Image className='justify-self-center' src={`/tic-tac-toe/game-logo.png`}  width={100} height={100} alt='Game'/>
      <div className='p-4'></div>
      <GameHeader />
      <GameBody />
    </div>
    </div>
  )
}

export default Game