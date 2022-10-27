import React from 'react';
import {format} from 'date-fns'
import "./TaskCard.css";

const TaskCard = (props) => {
    const {task} = props;
    return (
        <div className="TaskCard">
            <p>{task.title}</p>
            <p>{format(task.createDate, 'MM-dd-yyyy')}</p>
            <p>{task.status}</p>
        </div>
    );
}

export default TaskCard;
