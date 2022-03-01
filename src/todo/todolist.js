import React from "react";
import TodoItem from "./todoitem";
import PropTypes from "prop-types";
const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,

  }
}

 function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map(item => {
        return <TodoItem title = {item.title} number = {item.id} completed = {item.completed} key = {item.id}/>
      })}
         </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array,
}


export default TodoList