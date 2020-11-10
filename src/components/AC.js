import React from 'react'

export default function AC(props) {
    return (
        <div>
            <button type="button" className="btn btn-block" onClick={props.handleACClick}>AC</button>
        </div>
    )
}
