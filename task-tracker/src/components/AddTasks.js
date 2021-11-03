import React from 'react'

const AddTasks = () => {
  return (
    <form className='form'>
      <div className='form-control'>
        <div className='form-text'>
          <label className='form-label'>Task:</label>
          <input className='form-name' type='text' placeholder='Add Task Name Here' />
        </div>
        <div className='form-text'>
          <label className='form-label'>Time:</label>
          <input className='form-name' type='text' placeholder='Add Day & Time Of Task' />
        </div>
        <div className='form-text'>
          <label className='form-label'>Reminder:</label>
          <input className='form-checkbox' type='checkbox' placeholder='Would you like a Reminder?' />
        </div>
      </div>
    </form>
  )
}

export default AddTasks
