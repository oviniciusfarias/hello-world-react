import { Fragment } from 'react'
import styles from './404.module.css'
import error404 from 'assets/erro_404.png'
import MainButton from 'components/MainButton'
import { useNavigate } from 'react-router-dom'

const Page404 = () => {

  const navegar = useNavigate();

  return (
    <Fragment>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>
          Ops! Página não encontrada.
        </h1>

        <p className={styles.paragrafo}>
          Tem certeza de que era isso que você estava procurando?
        </p>

        <p className={styles.paragrafo}>
          Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
        </p>

        <div 
          className={styles.botaoContainer}
          onClick={() => navegar(-1)}
        >
          
          <MainButton tamanho="lg">
            Voltar
          </MainButton>
        </div>

        <img 
          className={styles.imagemCachorro}
          src={error404}
          alt="Cachorro de óculos e vestido como humano"
        />
      </div>

      <div className={styles.espacoEmBranco}></div>

    </Fragment>
    
  )
}

export default Page404