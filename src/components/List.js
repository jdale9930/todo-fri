import React, {useState} from "react"
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom"

const List = (props) => {
    const [isHovering, setIsHovering] = useState(false)

    return(
        <div onMouseEnter={ e => {
            setIsHovering(true);
        }}
        onMouseLeave={e=> {
            setIsHovering(false);
        }} className = "list">           
            <div style = {{textAlign:"left", width: "80%"}}>
                {props.todo.id}. {props.todo.name} - {props.todo.title}
            </div>
            {isHovering === true &&
            <button className = "delete"
            onClick = {(e) => {
                let newArray =[]
                props.todoArray.map((t) =>{
                    {t.id != props.todo.id && 
                    newArray.push(t)}
                    console.log(newArray)
                })
                newArray.map((n) => {
                    if(n.id > props.todo.id)
                    {
                        n.id = n.id - 1;
                    }
                    console.log(newArray)
                })
                props.setTodo(newArray)
            }}
            >Delete</button>
        }
        </div>
    )
}

export default List;