import React from 'react'

export default class Display extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render()  {

    let display;
    let number;
    if (!this.props.displayResult && !this.props.number) {
        display = <p id="display" className="float-right text-warning w-100">0</p>
    } else if (!this.props.displayResult && this.props.number) {
    display = <p id="display" className="float-right text-warning w-100">{this.props.number}</p>
    } else {
    display = <p id="display" className="float-right text-warning w-100">{this.props.result}</p>
    }
    if (!this.props.number) {
        number = <p className="float-right text-light w-100">0</p>
    } else {
        number = <p className="float-right text-light w-100">{this.props.number}</p>
    }
    return (
        <div className="row no-gutters">
          
       {/* <div className="col-12"> */}


        {display}
        {/* </div> */}
        {/* <div className="col-12"> */}
            {number}
            {/* </div> */}
        </div>
    )
}
}
