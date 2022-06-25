import { CircleNotch } from 'phosphor-react'
import React from 'react'

export const Loading = () => {
  return (
    <div className="flex flex-1 justify-center mt-[35vh]">
      <CircleNotch className='w-16 h-16 animate-spin' />
    </div>
  )
}
