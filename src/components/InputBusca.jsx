import style from '../styles/InputBusca.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCamera } from '@fortawesome/free-solid-svg-icons'

export default function InputBusca () {
    return (
        
        <div /* className="search-box" */className={style.searchBox}>
            <input className={style.input} type="text" placeholder="Buscando..." />
            <a href="##" className={style.icon}>
                {/* <FontAwesomeIcon icon={faCoffee} /> */}
                <FontAwesomeIcon icon={faCamera} />
            </a>
        </div>
    )
}