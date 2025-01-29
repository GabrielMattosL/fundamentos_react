import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar';
import { useState } from 'react';

import styles from './Comment.module.css'
//Comment.jsx
export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/maykbrito.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Antônio</strong>
              <time title='14/01/2025 - 12:33' datetime="2025-01-14 12:33">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>          
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20}/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
