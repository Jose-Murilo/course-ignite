import styles from './Task.module.css'
import { BsFillCheckCircleFill } from "react-icons/bs";

import trash from '../../images/trash.svg'
import { ITasks } from '../../App';
import { memo } from 'react';

export interface TaskProps {
    id?: number;
    onDelete: (taskID: string) => void;
    task: ITasks;
    onCompleted: (taskID: string) => void;
}

export function Task({ task, onDelete, onCompleted }: TaskProps) {
    return (
        <div className={styles.container}>
            <button className={styles.checkContainer} onClick={() => onCompleted(task.id)}>
                {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
            </button>

            <div className={styles.taskTitle}>
                <p className={task.isCompleted ? styles.completed : ''}>
                    {task.title}
                </p>
            </div>

            <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
                <img src={trash} alt="" width={24} />
            </button>
        </div>
    )
}

// export const Task = memo(TaskList)