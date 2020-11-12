import React from 'react';
import './ReadOut.css'

export default function Readout(coordinates: any) {
    if (coordinates.props != null) {
    var {x,y} = coordinates.props
    return (
        <div className='read-out'>
         {x},{y}
        </div>
    )
    } else {
        return(
            null
        )
    }
}
