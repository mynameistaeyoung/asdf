import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import Form from '../components/form/Form'
import Header from '../components/header/Header'
import List from '../components/list/List'

function TodoList() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "react",
            contents: "react를 배워보자!",
            isDone: false,
        },
        {
            id: 2,
            title: "js",
            contents: "js를 배워보자!",
            isDone: true,
        }
    ])
    return (
        <Layout>
            <Header />
            <Form setTodos={setTodos} todos={todos} />
            <List todos={todos} setTodos={setTodos} />
        </Layout>
    )
}

export default TodoList