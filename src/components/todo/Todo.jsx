import React from 'react'
import './todo.css'

function Todo({ item, onDeleteHandler, onEditHandler }) {
    return (
        <div className="todo-container">
            <div>
                <h2 className="todo-title">{item.title}</h2>
                <div>{item.contents}</div>
            </div>
            <div className="button-set">
                <button 
                className="todo-delete-button button" 
                onClick={() => onDeleteHandler(item.id)}>
                    Delete
                </button>
                <button 
                className="todo-complete-button button"
                onClick={() => onEditHandler(item.id)}>
                {item.isDone ? '미완료' : '완료' }
                </button>
            </div>
        </div>
    )
}

export default Todo