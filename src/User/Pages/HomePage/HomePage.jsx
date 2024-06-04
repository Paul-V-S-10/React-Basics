import React, { useContext } from 'react'
import { MyContext } from '../../../Hooks/ContextManager'


const HomePage = () => {
  const { setCount } = useContext(MyContext)
  return (
    <div>
      <button onClick={()=>setCount((previous)=>previous+1)} >Count</button>
    </div>
  )
}

export default HomePage