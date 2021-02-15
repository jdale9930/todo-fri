import React, {useState} from "react"

const RemoveByInput = (props) => {

    return(
        <div className = "inputDiv">
            <div style = {{width: "100%"}}>Remove by {props.inputType}:</div> 
            <br></br><input type = "text" placeholder ={`Remove by ${props.inputType}`}
            onChange = {((e) =>{
                props.setInput(e.target.value)
            })}
            value = {props.input} className = "removeByInputText"
            />
            <button
            onClick = {(() => {
                let newArray = []
                let compare = ""
                props.todo.map((t) => {
                    {props.inputType == "Name" ?
                        compare = t.name.toLowerCase()
                        :
                        compare = t.title.toLowerCase()
                    }
                    {compare != props.input.toLowerCase() &&
                    newArray.push(t)
                    console.log(newArray)
                    let counter = 1;
                    newArray.map((n) => {
                        n.id = counter;
                        counter = counter + 1;
                    })
                    }
                    props.setTodo(newArray)
                })
              })}
              className = "removeByInputButton">Remove</button>
        </div>
    )
}

export default RemoveByInput