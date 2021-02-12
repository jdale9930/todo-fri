import React, {useState} from "react"

const List = (props) => {

    let buttoncheck = true;
    function button(e)
    {
        console.log(e);
        e.target.innerHTML = e.target.innerHTML + "<button>Delete</button>"
    }
    return(
        <div onMouseOver={ e => {
            e.target.innerHTML = `${props.todo.name} - ${props.todo.title}` + "<button>Delete</button>"
        }}>
            
            {props.todo.name} - {props.todo.title}
            {/* {buttoncheck = 1 && <button>Delete</button>} */}
        </div>
    )
}

export default List;