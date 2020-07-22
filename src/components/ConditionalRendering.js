import React from 'react'

var globalVar = false

function ConditionalRendering() {

    if(globalVar) {
        return <div>If Rendering</div>
    } else {
        return <div>Else Rendering</div>
    }
}

export default ConditionalRendering