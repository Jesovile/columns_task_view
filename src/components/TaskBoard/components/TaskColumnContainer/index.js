import React from 'react';
import './TaskColumnContainer.css';
import TaskCard from "./components/TaskCard";

const TaskColumnContainer = (props) => {
    const {tasks, title} = props;
    return (
        <div className="TaskColumnContainer">
            <h3>{title}</h3>
            <div className="TaskColumnContainer_CardsScrollBlock">
                {tasks && tasks.map((item) => (
                    <TaskCard key={item.id} task={item}/>
                ))}
            </div>
        </div>
    );
}

export default TaskColumnContainer;
