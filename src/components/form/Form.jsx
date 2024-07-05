import React, { useState } from 'react'
import './form.css'

function Form({ todos, setTodos }) {

    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')

    const addButtonHandler = (event) => {
        event.preventDefault();
        const AddNewTodo = {
            id: todos.length + 1,
            title: title.trim(),
            contents: contents.trim(),
            isDone: false,
        }
        if (AddNewTodo.title !== '' && AddNewTodo.contents !== '') {
            setTodos([...todos, AddNewTodo]);
            setTitle('');
            setContents('');
        }
    };

    return (
        <form className='add-form' onSubmit={addButtonHandler}>
            <div className='input-group'>
                <label className='form-label'>제목</label>
                <input
                    type='text'
                    className='add-input'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <label className='form-label'>할 일</label>
                <input
                    type='text'
                    className='add-input'
                    value={contents}
                    onChange={event => setContents(event.target.value)}
                />
            </div>
            <button className='add-button' type='submit'>추가하기!</button>
        </form>

    )
}

export default Form