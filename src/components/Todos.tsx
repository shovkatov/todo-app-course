import {data} from "../todos";
import {Todo, TodoList} from "./TodoList";
import {ChangeEvent, FormEvent, useState} from "react";
import {AddTodos} from "./AddTodos";
import { v4 as uuidv4 } from "uuid"

export const Todos = () => {
    const [todos , setTodos] = useState<Todo[]>(data)
    const [task , setTask] = useState("")

    const handleDeleteTodos = (id:string) => {
        const updateTodos = todos.filter(todo => todo.id !== id)
        setTodos(updateTodos)
    }

    const handleCheckTodos = (id:string) => {
        const updateTodos = todos.map(todo => {
            if (todo.id === id){
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            }
            return todo
        })
        setTodos(updateTodos)
    }

    const handleChange = (e: ChangeEvent) => {
        const { value } = e.target as HTMLInputElement
        setTask(value)
    }

    const handleAddTodo = (todo: Todo) => {
        const updateTodos = [...todos, todo]
        setTodos(updateTodos)
        setTask("")
    }

    const handleSubmitTodo = (e: FormEvent) => {
        e.preventDefault()

        const todo = {
            id: uuidv4(),
            task: task,
            isCompleted: false,
        }
        task && handleAddTodo(todo)
    }

    console.log(todos)

    return (
        <div className="w-10/12 lg:w-1/2 max-w-2xl flex flex-col items-center">
            {todos.length?<p className="text-xl">You have a {todos.length} plans</p>:<p className="text-xl">Please add a plan</p>}
            <AddTodos
                task={task}
                handleChange={handleChange}
                handleSubmitTodo={handleSubmitTodo}
            />
            {todos.map((todo,i) => (
                <TodoList
                    key={i}
                    todo={todo}
                    handleDeleteTodos={handleDeleteTodos}
                    handleCheckTodos={handleCheckTodos}
                />
            ))}
        </div>
    )
}