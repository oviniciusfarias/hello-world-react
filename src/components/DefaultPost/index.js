import styles from './DefaultPost.module.css'

const DefaultPost = ({fotoCapa, titulo, children}) => {
  return (
    <article className={styles.postModeloContainer}>
      <div className={styles.fotoCapa} style={{backgroundImage: `url(${fotoCapa})` }} >

      </div>

      <h2 className={styles.titulo}>
        {titulo}
      </h2>

      <div className={styles.postConteudoContainer}>
        {children}
      </div>
    </article>
  )
}

export default DefaultPost