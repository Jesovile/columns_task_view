import './App.css';
import AppHeader from "../components/AppHeader";
import TaskBoard from "../components/TaskBoard";
import {useEffect, useState} from "react";
import {getTasks} from "../api/TaskApi";


function App() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        getTasks(40)
            .then((response) => {
                setTasks(response);
            });
    }, []);


  return (
    <div className="App">
      <AppHeader/>
        <div className="App_ContentSlot">
            <TaskBoard tasks={tasks}/>
        </div>
    </div>
  );
}

export default App;
