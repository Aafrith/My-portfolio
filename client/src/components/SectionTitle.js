import React from 'react'

function SectionTitle({
  title,
}) {
 
  return (
    <div className='flex gap-10 item-centre py-10'>
      <h1 className='text-3xl text-white '>{title}</h1>
      <div className='w-60 h-[2px] bg-tertiary mt-4'></div>
    </div>
  )
}

export default SectionTitle