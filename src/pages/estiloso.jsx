import Link from 'next/link'
import styles from '../styles/Estiloso.module.css'
import InputBusca from '../components/inputBusca'

const estiloso = () => {
    return (
        <div className={styles.roxo}>
            <h1>Estilo usando css modulos</h1>
            <Link href='/'>Voltar</Link>
            <InputBusca/>
        </div>
        
    )
}

export default estiloso
