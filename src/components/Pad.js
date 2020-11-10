import React from 'react'
import AC from './AC'
import Button from './Button'
import list from './list'

export default function Pad(props) {
    return (
        <div className="row no-gutters">

        {
            list.map((item, index, arr) => {
                
                if (item == 'AC') {
                    
                    return <div className="col-6">
                    <Button
                        key={item}
                        item={item}
                        handleClick={props.handleACClick}
                     />
                    </div>
                } else if (item == '/' || item == 'x' || item == '+') {
                    return <div className="col-3">
                    <Button
                        key={item}
                        item={item}
                        handleClick={props.handleOperatorClick}
                     />
                    </div>
                } else if (item == '-') {
                    return <div className="col-3">
                    <Button
                        key={item}
                        item={item}
                        handleClick={props.handleMinusClick}
                     />
                    </div>
                } else if (item == '.') {
                    return <div className="col-3">
                    <Button
                        key={item}
                        item={item}
                        handleClick={props.handleDecimalClick}
                     />
                    </div>
                } else if (item == '=') {
                    return <div className="col-3">
                    <Button
                        key={item}
                        item={item}
                        handleClick={props.handleEqualsClick}
                     />
                    </div>
                } else if (item == '0') {
                    return <div className="col-6">
                    <Button
                        key={item}
                        item={item}
                        handleClick={props.handleDigitClick}
                     />
                    </div>
                } else {
                    return <div className="col-3">
                    <Button
                        key={item}
                        item={item}
                        handleClick={props.handleDigitClick}
                     />
                    </div>
                }
                
                
            })
        }


        
        </div>
    )
}
