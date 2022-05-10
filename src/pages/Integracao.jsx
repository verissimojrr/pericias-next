import { useState } from "react"
import style from '../styles/Integracao.module.css'

export default function Integracao() {

    const [danoEstetico, setDanoEstetico] = useState({})
    const [busca, setBusca] = useState('')


    const obterDados = async () => {
        await fetch('http://localhost:3000/api/hello')
        .then(res => res.json())
        .then((dados) => {
            setDanoEstetico(dados.map(({classificacaoPerezGarcia, caracteristicas}) => {

                
                return (

                    document.querySelector('.oi').innerHTML +=
                    `<table>
                        <thead>
                            <tr>
                                <th>class</th>
                                <th>carac</th>
                            </tr>  
                        </thead>
                        <tbody>
                            <tr>
                                <td>${classificacaoPerezGarcia}</td>
                                <td>${caracteristicas}</td>
                            </tr>
                        </tbody>
                    </table>`
                )
            }))
            console.log(danoEstetico)
        })
    }

    return (
        <div className="oi" style={style.div}>
            <div>
                {/* <input type="text" onChange={e => setBusca(e.target.value)} /> */}
                <button onClick={obterDados}>Obter dados</button>
            </div>
            
        </div>
    )
}