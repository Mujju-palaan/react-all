import { createContext, useContext } from "react";
export type TodoType={
    id: string|number;
    completed: boolean;
    todo: string
}
export type TodoContextType = {
    todo: TodoType[];
    addTodo: (todo: string) => void;
    updateTodo: (id: string, todo: string) => void;
    deleteTodo: (id: string) => void;
    toggleCompleted: (id: string) => void;
}

export const TodoContext = createContext<TodoContextType>({
    todo: [{
        id : "1",
        completed: false,
        todo: 'Todo Msg'
    }],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {},
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}