import {React, useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTasks from './components/AddTasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text:'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
    {
      id: 2,
      text:'Meeting at school',
      day: 'Feb 6th at 08:30am',
      reminder: false,
    },
    {
      id: 3,
      text:'food shopping',
      day: 'Feb 30th at 4:30pm',
      reminder: false,
    }]);

    const DeleteTask = (ID) => {
      setTasks(tasks.filter((task) => task.id !== ID))
    }

    const toggleReminder = (id) => {
          setTasks(tasks.map((task) => task.id === id ? {...task, reminder: 
          !task.reminder} : task))
    }



  return (
    <div className="App">
       <Header />
       <AddTasks />
       {tasks.length > 0 ? <Tasks attTasks={tasks} onDelete={DeleteTask} onToggle={toggleReminder}/>: 'Tasks Empty'}
       
    </div>
  );
}

export default App;
