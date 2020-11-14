import React from 'react'

export default function AC(props) {
    return (
        <div>
            <button type="button" className="btn btn-block btn-danger" onClick={props.handleClick}>{props.item}</button>
        </div>
    )
}
