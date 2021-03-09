import React, { Component } from 'react'

export default class Channel extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             msg : "Coder 005 Tutorials"
        }
    }
    
    subscribe(){
        this.setState({
            msg : "Thanks for Subscribing Coder 005 Tutorials"
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={() => {this.subscribe()}} >Subscribe</button>
            </div>
        )
    }
}
