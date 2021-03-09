import React, { Component } from 'react'

export default class CHeader extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name} {this.props.cid}</h1>
                {this.props.children}
            </div>
        )
    }
}
