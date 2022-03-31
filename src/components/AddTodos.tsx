import {ChangeEvent, FormEvent} from "react";

export type AddTodosType = {
    task: string,
    handleChange: (e: ChangeEvent) => void
    handleSubmitTodo: (e: FormEvent) => void
}

export const AddTodos = ({ task, handleSubmitTodo, handleChange }: AddTodosType) => (
    <form onSubmit={handleSubmitTodo} className="flex justify-between w-full mb-2">
        <input type="text" value={task} className="flex-1 rounded shadow p-2 text-grey-dark" name="task" onChange={(e) => handleChange(e)}/>
        <button type="submit" className="bg-blue-500 rounded p-2 text-xl uppercase">Add</button>
    </form>
)