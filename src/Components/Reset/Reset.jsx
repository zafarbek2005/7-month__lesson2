import React from 'react'
import { reset } from '../../redux/counterslice'
import { useDispatch } from 'react-redux'

const Reset = () => {
    let dispatch = useDispatch()
  return (
    <>
    <button onClick={()=>dispatch(reset())}> reset</button>
    </>
  )
}

export default Reset