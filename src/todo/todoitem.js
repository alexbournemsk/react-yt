import React from 'react';
import PropTypes from 'prop-types';


const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem'
  },

  input: {
    marginRight: '1rem'
  },

  check: {
    textDecoration: 'line-through'
  }
}

function TodoItem(props) {
  const { number, title, completed, onChange } = props;
  if (completed) {
    return (
      <li style={styles.li} className='checked'>
        <span>
          <input type='checkBox' style = {styles.input}/>
          {number}. {title}
        </span>
        <button>&times;</button>
      </li>
    )
  } else {
    return (
      <li style={styles.li} onChange = {onChange}>
        <span>
        <input type='checkBox' style = {styles.input}/>
          {number}. {title}
        </span>
        <button>&times;</button>
      </li>
    )
  }

}

TodoItem.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string,
  completed: PropTypes.bool
}


export default TodoItem