import React from 'react'

export default class Display extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render()  {

    let display;
    let number;
    if (!this.props.displayResult) {
        display = <p>{this.props.result}</p>
    } else {
    display = <p>{this.props.displayResult}</p>
    }
    if (!this.props.number) {
        number = <p>0</p>
    } else {
        number = <p>{this.props.number}</p>
    }
    return (
        <div className="row no-gutters">
          
        <div className="col-12">


        {display}
        </div>
        <div className="col-12">
            {number}
            </div>
        </div>
    )
}
}
