import { React, useState } from 'react'

const AddTasks = ({onAdd}) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text){
      alert('please add task')
      return
    }

    onAdd({text,day,reminder});


    setText('');
    setDay('');
    setReminder(false);
  }


  return (
    <form className='form' onSubmit={onSubmit}>
      <div className='form-control'>
        <div className='form-text'>
          <label className='form-label'>Task:</label>
          <input className='form-name' type='text' placeholder='Add Task Name Here' value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className='form-text'>
          <label className='form-label'>Time:</label>
          <input className='form-name' type='text' placeholder='Add Day & Time Of Task' value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
        <div className='form-text'>
          <label className='form-label'>Reminder:</label>
          <input className='form-checkbox' type='checkbox' checked={reminder}placeholder='Would you like a Reminder?' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>
        <input type='submit' value="Save Task" className='btn btn-block' />
      </div>
    </form>
  )
}

export default AddTasks
