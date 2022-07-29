import React from 'react'
import { useParams } from 'react-router-dom'
const Userdetails = () => {
    const object = useParams()
    const {id} = object


  return (
    <div>Userdetails of {id}</div>
  )
}

export default Userdetails