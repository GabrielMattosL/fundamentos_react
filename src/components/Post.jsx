//Post.jsx
import styles from '../components/Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/gabrielmattosl.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Gabriel Antônio</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='14/01/2025 - 12:33' datetime="2025-01-14 12:33">Publicado há 1h</time>
      </header>

      <div className={styles.content}>

      <p>Fala galeraa 👋</p>

      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

      <p>👉 jane.design/doctorcare</p>

      <p><a href="">#novoprojeto #nlw #rocketseat</a></p>

      </div>
    </article>
  )
}