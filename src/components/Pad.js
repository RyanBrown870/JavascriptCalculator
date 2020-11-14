import React from 'react'
import AC from './AC'
import Button from './Button'
import list from './list'
import ids from './ids'

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
                        colour="danger"
                        h=""
                        id={ids[index]}
                     />
                    </div>
                } else if (item == '/' || item == 'x' || item == '+') {
                    return <div  className="col-3">
                    <Button
                        key={item}
                        item={item}
                        handleClick={props.handleOperatorClick}
                        colour="secondary"
                        h=""
                        id={ids[index]}
                     />
                    </div>
                } else if (item == '-') {
                    return <div className="col-3">
                    <Button
                        key={item}
                        item={item}
                        handleClick={props.handleMinusClick}
                        colour="secondary"
                        h=""
                        id={ids[index]}
                     />
                    </div>
                } else if (item == '.') {
                    return <div className="col-3">
                    <Button
                        key={item}
                        item={item}
                        handleClick={props.handleDecimalClick}
                        colour="dark"
                        h=""
                        id={ids[index]}
                     />
                    </div>
                } else if (item == '=') {
                    return <div className="col-3">
                    <Button
                        key={item}
                        item={item}
                        handleClick={props.handleEqualsClick}
                        colour="info"
                        h="h-100"
                        id={ids[index]}
                     />
                    </div>
                } else if (item == '0') {
                    return <div className="col-6">
                    <Button
                        key={item}
                        item={item}
                        handleClick={props.handleDigitClick}
                        colour="dark"
                        h=""
                        id={ids[index]}
                     />
                    </div>
                } else {
                    return <div className="col-3">
                    <Button
                        key={item}
                        item={item}
                        handleClick={props.handleDigitClick}
                        colour="dark"
                        h=""
                        id={ids[index]}
                     />
                    </div>
                }
                
                
            })
        }


        
        </div>
    )
}
