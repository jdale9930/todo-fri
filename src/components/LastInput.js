import React, {useState} from "react"

const LastInput = (props) => {
return(
<div>Last Entry: {props.last.name}-{props.last.title}</div>
)
}

export default LastInput