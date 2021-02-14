import React, {useState} from "react"
import List from "./List"
import "./Todo.css"
import LastInput from "./LastInput"
import RemoveByInput from "./RemoveByInput"

const Todo = () => {

const [name, setName] = useState("")
const [title, setTitle] = useState("")
const [removeByName, setRemoveByName] = useState("")
const [removeByTitle, setRemoveByTitle] = useState("")
const [todo, setTodo] = useState([
    {id: 1 ,name: "Jeff" ,title: "Dishes"},
    {id: 2, name: "Bill" ,title: "Take out Trash"},
    {id: 3 ,name: "Amy" ,title: "Walk the Dog"},
    {id: 4 ,name: "Emma" ,title: "Work"}
])

const [lastTodo, setLastTodo] = useState("")
let newTodo = {id: 0, name: "", title: ""}
    return(
        <div>
            <input type = "text" id = "name" placeholder = "Name"
            onChange = {(e) => setName(e.target.value)} value = {name}
            ></input>
            <input type = "text" id = "title" placeholder = "Title"
            onChange = {(e) => setTitle(e.target.value)} value = {title}
            ></input>
            <button id = "add"
            onClick = {(e) => {
                if(title.length > 0 && name.length > 0)
                {
                newTodo = {id: todo.length + 1, name, title}
                console.log(newTodo)
                setTodo((oldTodos) =>{
                    setLastTodo(newTodo)
                    {console.log(lastTodo)}
                    return [...oldTodos, newTodo]
                }
                )
                //setLT("WHY")
                setTitle("")
                setName("")
                }
                console.log(lastTodo)
            }}
            >Add to List</button>
            <br></br>
            <RemoveByInput 
            input = "Name" name = {removeByName} setName = {setRemoveByName} todo = {todo}/>
            <RemoveByInput 
            input = "Name" name = {removeByName} setName = {setRemoveByName} todo = {todo}/>
            <div>Remove by Title: <input type = "text" placeholder ="Remove by Title"/>
            <button>Remove</button>
            </div>
            {todo.length > 0 &&
                todo.map((t) =>
                <List todoArray = {todo} setTodo = {setTodo} todo = {t} key ={t.id}></List>)
            }
            <LastInput last = {lastTodo} key = {1}></LastInput>
        </div>
    )
}
export default Todo;