import React from 'react'
import { useSelector } from 'react-redux'
const Result = () => {
    const result = useSelector((state)=>state.counter.value)

  return (
    <h1>{result}</h1>
  )
}

export default Result