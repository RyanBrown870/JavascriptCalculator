import React from 'react'

export default function Button(props) {
    return (
        <div >
            <button id={props.id} type="button" className={`btn btn-block btn-${props.colour} ${props.h}`}  onClick={props.handleClick}>{props.item}</button>
        </div>
    )
}
