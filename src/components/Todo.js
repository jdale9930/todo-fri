import React, {useState} from "react"
import List from "./List"

const Todo = () => {

const [todo, setTodo] = useState([
    {id: 1 ,name: "Jeff" ,title: "Dishes"},
    {id: 2, name: "Bill" ,title: "Take out Trash"},
    {id: 3 ,name: "Amy" ,title: "Walk the Dog"},
    {id: 4 ,name: "Emma" ,title: "Work"}
])
    return(
        <div>
            <input type = "text" id = "name" placeholder = "Name"></input>
            <input type = "text" id = "title" placeholder = "Title"></input>
            <button id = "add">Add to List</button>
            {todo.length > 0 &&
                todo.map((t) =>
                <List todo = {t} key ={t.id}></List>)
            }
        </div>
    )
}
export default Todo;