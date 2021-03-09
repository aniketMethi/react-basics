import React from 'react'

function Header(props) {
    return (
        <div>
            <h1>Hello {props.name} {props.cid}</h1>
            {props.children}
        </div>
    )
}

export default Header
