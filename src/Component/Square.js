import React from 'react'
import '../App.css'
export const Square = ({val, chooseSquare}) => {
    return (
        <div className='square' onClick={chooseSquare}>
            {val}
        </div>
    )
}
