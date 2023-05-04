import styles from "./Post.module.css";
import myImg from "../assets/myImg.jpg";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={myImg}/>
          <div className={styles.avatarInfo}>
            <strong>José Murilo</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="21 de janeiro às 12:28hr" dateTime="2023-01-21 12:28:00">
          Publicado hà 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form action="" className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
            name="" 
            placeholder="Deixe um comentario" 
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
