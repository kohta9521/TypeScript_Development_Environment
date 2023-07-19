import { current } from '@reduxjs/toolkit';
import React, { useEffect, useState, FC} from 'react'
import { increment } from './features/counter/counterSlice';

const CleanUp: React.FC = () => {
  const [ currentNum, setCurrentNum ] = useState(0);

  const incrementNum = () => {
    console.log("Mouse event invoked !")
    setCurrentNum((preNum) => preNum + 1)
  }

  useEffect(() => {
    console.log("useEffect in cleanUp invoked !")
    window.addEventListener("mousedown", incrementNum);
    return () => {
      console.log("clean up invoked")
      window.removeEventListener("mousedown", incrementNum)
    }
  }, [])

  return (
    <div>
      {currentNum}
    </div>
  )
}

export default CleanUp
