import styles from "./Comment.module.css";

import myImg from "../assets/myImg.jpg";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={myImg}/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>José Murilo</strong>
              <time title="21 de janeiro às 12:28hr" dateTime="2023-01-21 12:28:00">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentario">
                <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
            <button>
                <ThumbsUp />
                Aplaudir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
