import React from 'react';
import './Timer.css'

export default function Timer(timeToGo: any) {
    let time = timeToGo.props
    return (
        <div className='timer'>
            {time}
        </div>
    )
}
