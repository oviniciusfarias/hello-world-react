import './Post.css'
import styles from './Post.module.css'
import { useParams } from "react-router-dom"
import posts from 'json/posts.json'
import DefaultPost from "components/DefaultPost"
import ReactMarkdown from 'react-markdown'
import Page404 from 'pages/404'
import DefaultPage from 'components/DefaultPage'
import PostCard from 'components/PostCard'

const Post = () => {
  
  const params = useParams()
  
  const postContent = posts.find((postItem) => {
    return postItem.id === Number(params.id)
  })

  if (!postContent) {
    return <Page404 />
  }

  const recommendedPosts = posts
    .filter((postItem) => postItem.id !== Number(params.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4)

  
  return (
    <DefaultPage>
      <DefaultPost 
        titulo={postContent.titulo}
        fotoCapa={`/assets/posts/${postContent.id}/capa.png`}
      >
        <div className="post-markdown-container">
          <ReactMarkdown>
            {postContent.texto}
          </ReactMarkdown>
        </div>

        <h2 className={styles.tituloOutrosPosts}>
          Outros posts que você pode gostar:
        </h2>

        <ul className={styles.postsRecomendados}>
          {recommendedPosts.map((post) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>

      </DefaultPost>
    </DefaultPage>
  )
}

export default Post