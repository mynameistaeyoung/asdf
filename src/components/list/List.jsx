import React from 'react'
import './list.css'
import Todo from '../todo/Todo';

function List({ todos, setTodos }) {

    // 삭제
    const onDeleteHandler = (todoId) => {
        const newTodo = todos.filter(item => item.id !== todoId)
        setTodos(newTodo)
    };

    // 완료,되돌리기
    const onEditHandler = (todoId) => {
        const newTodo = todos.map(item => {
            return item.id === todoId ? 
            { ...item, isDone: !item.isDone } : 
            {...item} 
        })
        setTodos(newTodo)
    }

    return (
        <div className="list-container">
            <h2>Working..🔥</h2>
            <div className="list-wrapper">
                {todos.map(item => !item.isDone ? 
                <Todo 
                item={item} 
                key={item.id} 
                setTodos={setTodos} 
                onDeleteHandler={onDeleteHandler} 
                onEditHandler={onEditHandler}
                /> : null)}
            </div>
            <h2>Done..! 🎉</h2>
            <div className="list-wrapper">
                {todos.map(item => item.isDone ? 
                <Todo 
                item={item} 
                key={item.id} 
                setTodos={setTodos} 
                onDeleteHandler={onDeleteHandler} 
                onEditHandler={onEditHandler}
                /> : null)}
            </div>
        </div>
    )
}

export default List