import React from 'react'

function Loading() {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='loader'>
        <div className='circle'></div>
      </div>
    </div>
  )
}

export default Loading