import Counter from './Counter';
// import Person from './Person';
// import Modal from './Modal';
// import Item from './Item';
import { useState } from 'react';
import Task from './Task';
import Form from './Form';
import './App.css';

function App() {

  let [isCounter, setCounter] = useState(true);

  let [tasks, setTasks] = useState([
    {
      text: "Выучить JS",
      done: false
    },
    {
      text: "Познакомиться с React",
      done: false
    },
    {
      text: "Устроиться на работу",
      done: false
    }
  ]);

  let addTask = text => {
    setTasks([...tasks, { text, done: false }])//{text: text}
  }

  let doneTask = index => {
    let newTask = [...tasks];
    newTask[index].done = !newTask[index].done;
    setTasks(newTask);
  }

  let deleteTask = index => {
    let newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  }



  return (
    <div className="App">

      <div className='task-list'>
        {
          tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              doneTask={doneTask}
              index={index}
              deleteTask={deleteTask} />
          ))
        }
        <Form addTask={addTask} />
      </div>

       <button onClick={() => setCounter(!isCounter)}>Toggle counter</button>
      { isCounter && <Counter />}
      {/* <Person /> 
      <Modal />
      <Item />
      */}
    </div>
  );
}

export default App;
