import React from 'react';
import './Target.css'

export default function Target(coordinates: any) {
    if (coordinates.props != null) {
    var {x,y} = coordinates.props
    return (
        <div className='read-out'>
        Your Target =  {x},{y}
        </div>
    )
    } else {
        return(
            null
        )
    }
}
