import { ITasks } from "../../App"
import styles from './Tasks.module.css';
import { Task } from "../Task";
import { memo } from "react";

interface Props {
    tasks: ITasks[];
    onDelete: (taskID: string) => void;
    onCompleted: (taskID: string) => void;
}

export function TasksList({ tasks, onDelete, onCompleted }: Props) {
    const tasksCompleted = tasks.filter(task => task.isCompleted)

    return (
        <>
            <div className={styles.containerTasks}>
                <div className={styles.tasksStatus}>
                    <div className={styles.tasksCreated}>
                        <span>Tarefas criadas</span>
                        <div className={styles.amountTasks}>
                            {tasks.length}
                        </div>
                    </div>

                    <div className={styles.completedTasks}>
                        <span>Concluídas</span>

                        <div className={styles.amountTasksCompleted}>
                            {tasksCompleted.length} de {tasks.length}
                        </div>
                    </div>
                </div>

                <div className={styles.tasks}>
                    {tasks.map(task => <Task key={task.id} task={task} onDelete={onDelete} onCompleted={onCompleted} /> )}
                </div>
            </div>
        </>
    )
}

export const Tasks = memo(TasksList)