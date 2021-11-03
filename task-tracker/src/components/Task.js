import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({attTask, onDelete,onToggle}) => {
  return (
    <div 
       className={`task${attTask.reminder ? 
        '-reminder' : ''}`} 
       onDoubleClick={() => onToggle(attTask.id)}>
    <h3>{attTask.text} <FaTimes className='FaTimes' style={{color:'red !important', cursor:'pointer'}} onClick={() => onDelete(attTask.id)} /></h3>
    <p>{attTask.day}</p>  
    </div>
  )
}

export default Task