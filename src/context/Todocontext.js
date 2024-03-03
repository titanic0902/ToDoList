import {createContext,useContext} from 'react';
export const TodoContext  = createContext({
    todos: [
        {
            id:1,                       // its like this   theme:dark it jsut that its now wrap in an array.
            todo:"your msg",
            completed:false,
        }
    ],
    addTodo: (todo) =>{},
    updatedTodo : (todo,id) =>{},
    deleteTodo :(id)  =>{},
    toggleComplete:(id) =>{}
    
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider