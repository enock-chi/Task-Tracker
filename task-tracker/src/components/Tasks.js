import Task from "./Task"

const Tasks = ({attTasks, onDelete, onToggle}) => {
  return (
    <div className='tasks-container'>
          {attTasks.map((task) => (<Task key={task.id} attTask={task} onDelete={onDelete} onToggle={onToggle}/>))}
    </div>
  )
}

export default Tasks
