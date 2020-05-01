import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, onDelete, completed, text }) => (
  
  <li 
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <button className="taskStatus" onClick={onClick}>{completed ? 'Undo' : 'Complete'}</button>
    <button className="taskStatus" disabled={!completed}  onClick={onDelete}>Delete</button>
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
