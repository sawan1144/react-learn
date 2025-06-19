import React from 'react'

const Details = (props) => {
    const Elem = props.elem

  return (
    <div key={Elem.id} className='bg-gray-400 m-2 p-2 rounded text-black font-semibold h-50 flex justify-between items-center'>
        <img className='h-45' src={Elem.download_url} alt="" />
        <h1 className=' text-lg mr-9'>{Elem.author}</h1>
    </div>
  )
}

export default Details