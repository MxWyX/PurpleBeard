import React from 'react'

const Error = ({message}) => {
  return (
    <div className='ui error '>
        <i className='close icon'>
            <div className='header'>
                There were some errors while fetching API
            </div>
            <ul className='list'>
                <li>{message}</li>
            </ul>
        </i>
    </div>
  )
}

export default Error