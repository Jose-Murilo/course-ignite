import styles from './EmptyTask.module.css'
import Empty from '../../images/Empty.svg'
import { ITasks } from '../../App'

interface EmptyTaskProps {
    tasks: ITasks[];
}

export function EmptyTasks({ tasks }: EmptyTaskProps) {
    return (
        <div className={styles.containerEmpty}>
            <div className={styles.taskEmpty}>
                <img src={Empty} width={45} alt="" />
                <p>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    Crie tarefas e organize seus itens a fazer
                </p>
            </div>
        </div>
    )
}