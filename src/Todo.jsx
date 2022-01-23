import React from 'react';

const todo = ({ todo, toggleTodo }) => {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
                {todo.name}
            </label>
        </div>
    )
};

export default todo;

