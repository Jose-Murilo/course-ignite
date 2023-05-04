import styles from './Header.module.css';
import toDo from '../../images/toDo.svg'
import plus from '../../images/plus.svg'

import { ChangeEvent, FormEvent, useState } from 'react';

interface HeaderProps {
    onAddTasks: (titleTasks: string) => void;
}

export function Header({ onAddTasks }: HeaderProps) {
    const [titleTasks, setTitleTasks] = useState('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        onAddTasks(titleTasks)
        setTitleTasks('')
    }
    
    function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
        setTitleTasks(event.target.value)
    }
    
    return (
        <>
            <header className={styles.header}>
                <img src={toDo} width={92} alt="" />
            </header>
            
            <form onSubmit={handleSubmit}>
                <div className={styles.inputTasks}>
                    <input
                        type="text"
                        onChange={handleChangeInput}
                        value={titleTasks}
                        placeholder='Adicione uma nova tarefa'
                    />

                    <button>
                        <span>Criar</span>
                        <img src={plus} width={15} alt="" />
                    </button>
                </div>
            </form>
        </>
    )
}