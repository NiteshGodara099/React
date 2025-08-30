import React from 'react'
import { useParams } from 'react-router'

function User() {

    const {id} = useParams()

  return (
    <div className='flex justify-center w-full'>
        <div className='bg-indigo-200 max-w-4xl flex justify-center font-serif text-4xl text-gray-500 hover:scale-110 hover:text-blue-500 transition-transform duration-200 py-2 m-2 rounded-md'>User: {id}</div>
    </div>
  )
}

export default User