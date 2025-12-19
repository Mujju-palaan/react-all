import { createContext, useContext } from "react";
export type TodoType={
    id: string;
    completed: boolean;
    todo: string;
}
export type TodoContextType = {
    todos: TodoType[];
    addTodo: (todo: TodoType) => void;
    updateTodo: (id: string, todo: TodoType) => void;
    deleteTodo: (id: string) => void;
    toggleComplete: (id: string) => void;
}

export const TodoContext = createContext<TodoContextType>({
    todos: [{
        id : "1",
        completed: false,
        todo: 'Todo Msg'
    }],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}