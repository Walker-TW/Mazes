import React from 'react';
import './ScoreBoard.css'

export default function ScoreBoard(score: any) {
    if (score.props !== 0) {
    var playerScore = score.props
    return (
        <div className='score-board'>
            {playerScore}
        </div>
    )
    } else {
        return(
        <div className='score-board'>
            0000000000
        </div>
        )
    }
}


// Want this to default to a 00000000000
// And then on completion update with a new score that i will generate
// Maybe have a great job? 
