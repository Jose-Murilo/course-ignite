import { Post } from "./Post"

export function App() {

  return (
    <div>
      <Post 
        author="José Murilo"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolores atque optio dolorem voluptatibus esse, similique beatae neque cum natus nemo corrupti sapiente possimus doloribus obcaecati blanditiis, consectetur illo quidem."
      />

      <Post
        author="Diego Fernandes"
        content="Outro texto legal!"
      />
    </div>
  )
}