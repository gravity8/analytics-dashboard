import React from 'react'
import "./ProgressBar.css"

function ProgressBar({item, color, percentage}) {
  return (
    <div className='ProgressBar'>
        <h3>{item.title}</h3>
        <div className='external-bar' >
            <div className='inner-bar' style={{backgroundColor:`${color}`, width:`${percentage}`,zIndex:10}}></div>
        </div>
        <div className='text-below'>
            <p>{item.progress}</p>
            <p>{item.growth}</p>
        </div>
    </div>
  )
}

export default ProgressBar
