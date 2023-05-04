import { Header } from "./components/Header";
import { Post } from "./components/Post.jsx";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/Jose-Murilo.png',
        name: 'José Murilo',
        role: 'Web Developer'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content:`Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
        no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀` },
        { type: 'link', content:'jane.design/doctorcare' }
      ],
      publishedAt: new Date('2023-02-19 20:00:00')
    },
    
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/MaykBrito.png',
        name: 'Mayk Brito',
        role: 'Educator @rocketseat'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content:`Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
        no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀` },
        { type: 'Link', content:'jane.design/doctorcare' }
      ],
      publishedAt: new Date('2023-02-19 20:00:00')
    }
  ]

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
