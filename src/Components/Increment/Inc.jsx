import React from 'react'
import { increment } from '../../redux/counterslice'
import { useDispatch } from 'react-redux'


const Inc = () => {
    let dispatch = useDispatch()
  return (
   <>
   <input type="number"onSubmit={()=>dispatch(increment())} />
   <button  onClick={()=>dispatch(increment())}>sumbit</button>
   <button  onClick={()=>dispatch(increment())}>increment</button>
   
   </>
  )
}

export default Inc