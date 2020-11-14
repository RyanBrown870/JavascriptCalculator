import React from 'react'

export default class Display extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render()  {

    let display;
    if (!this.props.isEqualsClicked) {
        display = <p>0</p>
    } else {
    display = <p>{this.props.result}</p>
    }

    return (
        <div className="row no-gutters">
          
        


            {display}
        
            <p>{this.props.number}</p>
        </div>
    )
}
}
