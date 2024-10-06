import styles from './MainButton.module.css'

const MainButton = ({ children, tamanho }) => {
  return (
    <button className={`
        ${styles.botaoPrincipal}
        ${styles[tamanho]}
    `}>
      {children}
    </button>
  )
}

export default MainButton
