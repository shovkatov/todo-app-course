export type Todo = {
    id: string
    task: string
    isCompleted: boolean
}

type TodoProps = {
    todo: Todo
    handleDeleteTodos: (id: string) => void
    handleCheckTodos: (id: string) => void
}

export const TodoList = ({todo : {task , isCompleted, id}, handleDeleteTodos, handleCheckTodos} : TodoProps) => (
    <div className={`
        flex w-full p-4 mb-2 justify-between items-center
       ${isCompleted ? "bg-gray-400 " : "bg-green-300"}
      `}>
        <p className={`
          ml-2 text-xl font-sans font-medium
          ${isCompleted ? "text-white line-through" : "text-gray-700"}
        `}>{task}</p>
        <div className="w-1/6 flex justify-between items-center mr-2">
            <button onClick={() => handleDeleteTodos(id)} className="h-7 w-7 flex justify-center items-center bg-red-400 hover:bg-red-500 text-white font-bold  rounded">x</button>
            <input
                type="checkbox"
                checked={isCompleted}
                onChange={() => handleCheckTodos(id)}
                className="form-checkbox h-7 w-7"
            />
        </div>
    </div>
)