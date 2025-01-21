import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from '../components/Post.module.css';


export function Post({ author, publishedAt, content }) {

  const [comments, setComments] = useState([
    'Post Muito bom!!',
  ])
  
  
  const publishedDateFormatted = format(publishedAt, "d 'de' MMMM 'às' HH:mm'h'", {
    locale: ptBR,
  })
  
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })
  
  const [newCommentText, setNewCommentText] = useState('');
  
  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }
  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }
  
  //Post.jsx
  function deleteComment(comment) {
    console.log(`Deletar comentário ${comment}`)
  }
  
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} datetime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
     
      <div className={styles.content}>
        {content.map(line => {
          if (line.type == 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type == 'link') {
            return <p key={line.content}><a href={line.content}>{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>

        <textarea
          name='comentario'
          value={newCommentText}
          placeholder='Deixe um comentário'
          onChange={handleNewCommentChange}
          />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      {/* Post.jsx */}
      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}