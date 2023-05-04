import { Header } from "./components/Header";
import { Post } from "./components/Post.jsx";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Murilo"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repellendus explicabo earum ratione laboriosam sequi eum id natus nisi laudantium voluptate eligendi vitae consectetur, blanditiis, iste quasi architecto et tenetur?"
          />

          <Post
            author="Murilo"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repellendus explicabo earum ratione laboriosam sequi eum id natus nisi laudantium voluptate eligendi vitae consectetur, blanditiis, iste quasi architecto et tenetur?"
          />
        </main>
      </div>
    </div>
  );
}
