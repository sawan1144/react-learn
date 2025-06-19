import React, { useState } from 'react'
import axios from 'axios'
import Details from './Details'

const App = () => {

  const [data, setdata] = useState([])

  const getdata = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    setdata(response.data)
  }

  return (
    <div>
      <button onClick={getdata} className='m-5 bg-blue-400 px-6 py-3 rounded text-xl text-white font-semibold active:scale-90 cursor-pointer'>Get Data</button>
      <div className='m-5 p-5 bg-gray-700'>
        {data.map((elem)=>{
          return <div>
            < Details elem={elem}/>
          </div>
        })}
      </div>
    </div>
  )
}

export default App