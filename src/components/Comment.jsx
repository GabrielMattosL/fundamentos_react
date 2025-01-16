import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/gabrielmattosl.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Antônio</strong>
              <time title='14/01/2025 - 12:33' datetime="2025-01-14 12:33">Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom, parabéns!!</p>          
        </div>

        <footer>
          <button>
            <ThumbsUp size={20}/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
