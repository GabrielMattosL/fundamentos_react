import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Post } from './components/Post'

import styles from './App.module.css';

import './global.css';

//App.jsx
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/gabrielmattosl.png",
      name: "Gabriel Antônio",
      role: "Web Developer",
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date("2025-01-18 14:49"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CEO @Rocketseat",
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date("2025-01-16 12:33"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/pedrowillen.png",
      name: "Pedro Willen",
      role: "Piston Cup Winer since 2020",
    },
    content: [
      { type: 'paragraph', content: 'Parabêns irmão'},
      { type: 'paragraph', content: 'Vai ganhar sempre!! 🚀'},
    ],
    publishedAt: new Date("2025-01-15 12:33"),
  },
]
//App.jsx
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
