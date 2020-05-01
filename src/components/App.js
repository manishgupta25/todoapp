import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className="todoListMain">
    <h2>To-Do App!</h2>
    <h4>Add New To-Do</h4>
    <AddTodo />

    <h3>Let's get some work done.</h3>
    <VisibleTodoList />
    {/* <Footer /> */}
  </div>
)

export default App
