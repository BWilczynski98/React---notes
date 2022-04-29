import React from 'react';
import { ACTIONS } from './Todos';

const Todo = ({ todo, dispatch }) => {
    return (
        <>
            <div>
                <span style={{ color: todo.complete ? '#AAA' : '#000' }}>
                    {todo.name}
                </span>
                <button
                    onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payloud: { id: todo.id } })}>Toggle</button>
                <button
                    onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payloud: { id: todo.id } })}>Del</button>
            </div>

        </>
    );
}

export default Todo;