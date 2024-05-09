import React from 'react'
import { increment } from '../../redux/counterslice'
import { useDispatch } from 'react-redux'


const Inc = () => {

    let dispatch = useDispatch()
  return (
   <>
   <button  onClick={()=>dispatch(increment())}>increment</button>
   
   </>
  )
}

export default Inc