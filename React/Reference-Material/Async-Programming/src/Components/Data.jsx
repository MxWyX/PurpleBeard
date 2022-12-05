import React from 'react'

const Data = ({data}) => {
    console.log(data)
  return (
    <div className='ui card'>
        <div className='content'>
            <a className='header'>{data.name}</a>
            <div className='description'>
                Temperature: {data.min?.temp}
            </div>
            <div className='description'>
                Description: {data.weather[0].description}
            </div>
            {/* {data.items[0].fullTitle} */}
        </div>
    </div>
  )
}

export default Data