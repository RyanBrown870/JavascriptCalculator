import React from 'react'

export default function Button(props) {
    return (
        <div >
            <button type="button" className="btn btn-block" onClick={props.handleClick}>{props.item}</button>
        </div>
    )
}
