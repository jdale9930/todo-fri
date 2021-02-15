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
        <main>
            <div className = "topDiv">
            <div className = "addDiv">
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
                setTitle("")
                setName("")
                }
                console.log(lastTodo)
            }}
            >Add to List</button>
            
            </div>
            <div className = "removeDiv">
            <RemoveByInput 
            inputType = "Name"  input = {removeByName} setInput = {setRemoveByName} todo = {todo} setTodo = {setTodo}/>
            <RemoveByInput 
            inputType = "Title" input = {removeByTitle} setInput = {setRemoveByTitle} todo = {todo} setTodo = {setTodo}/>
            </div>
            </div>
            <LastInput last = {lastTodo} key = {1}></LastInput>
            {todo.length > 0 &&
                todo.map((t) =>
                <List todoArray = {todo} setTodo = {setTodo} todo = {t} key ={t.id}></List>)
            }
        </main>
    )
}
export default Todo;