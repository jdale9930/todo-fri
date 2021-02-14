import React, {useState} from "react"

const RemoveByInput = (props) => {

    return(
        <div>
            Remove by {props.input}: 
            <input type = "text" placeholder ={`Remove by ${props.input}`}
            onChange = {((e) =>{
                props.setName(e.value)
            })}
            value = {props.name}
            />
            <button
            onClick = {(() => {
                props.todo.map((t) => {

                })
            })}>Remove</button>
        </div>
    )
}

export default RemoveByInput