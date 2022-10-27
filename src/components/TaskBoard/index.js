import React, {useEffect, useState} from 'react';
import './TaskBoard.css';
import FilterPanel from "./components/FilterPanel";
import TaskColumnContainer from "./components/TaskColumnContainer";
import filter from "./components/Filter";

const TaskBoard = (props) => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        setTasks(props.tasks || []);
    }, [props.tasks]);

    const onFilterChange = (filters) => {
        setTasks(filter(filters, props.tasks || []));
    }

    return (
        <section className="TaskBoard">
            <h2 className="TaskBoard_Header">
                Your tasks
            </h2>
            <FilterPanel onChangeFilter={onFilterChange}/>
            <div className="TaskBoard_ColumnsSlot">
                <TaskColumnContainer tasks={tasks.filter((item) => item.status === 'OPEN')} title={"Open"}/>
                <TaskColumnContainer tasks={tasks.filter((item) => item.status === 'IN_PROGRESS')} title={"In Progress"}/>
                <TaskColumnContainer tasks={tasks.filter((item) => item.status === 'CLOSED')} title={"Closed"}/>
            </div>
        </section>
    );
}

export default TaskBoard;
