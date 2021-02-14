import React, {useState} from "react"

const LastInput = (props) => {
return(
<div>{props.last.id}-{props.last.name}-{props.last.title}</div>
)
}

export default LastInput