import React, { useState, useReducer } from 'react';
import './Todos.css';
import Todo from './Todo';

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
};

export const Todos = () => {


    const reducer = (todos, action) => {
        switch (action.type) {
            case ACTIONS.ADD_TODO:
                return [...todos, newTodo(action.payloud.name)];
            case ACTIONS.TOGGLE_TODO:
                return todos.map(todo => {
                    if (todo.id === action.payloud.id) {
                        return { ...todo, complete: !todo.complete }
                    }
                    return todo
                });
            case ACTIONS.DELETE_TODO:
                return todos.filter(todo => todo.id !== action.payloud.id)
            default:
                break;
        }
    };

    const newTodo = (name) => {
        return { id: Date.now(), name: name, complete: false }
    }
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payloud: { name: name } })
        // w "payloud" nazwa dowolna, możemy przesłać zmienne, do których nie miał bez tego dostępu reducer
        setName('')
    };

    console.log(todos);
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                ></input>
            </form>
            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch} actions={ACTIONS} />
            })}
        </>
    );
}

