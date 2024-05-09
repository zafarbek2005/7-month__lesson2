import React from 'react'
import { decrement } from '../../redux/counterslice'
import { useDispatch } from 'react-redux'
const Dec = () => {
    let dispatch = useDispatch()
    
  return (
   <>
   
   <button onClick={()=>dispatch(decrement())}>decrement</button>
   </>
  )
}

export default Dec  