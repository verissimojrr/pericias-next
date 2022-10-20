import Link from "next/link"
import Autenticacao from "./autenticacao"
import paginaUiVerse from './paginaUiVerse'


export default function Inicio(params) {
  return (
    <div>
      <h1>Inicio</h1>
      <h2>Vamos estudar o Next.Js</h2>
      <Link href='/estiloso'>Ir para estiloso</Link>
      <Link href='/autenticacao'>Autenticacao</Link>
      <Autenticacao /*{...nomeUsuario} {...email}*/ />
      <Link href='/paginaUiVerse'>Modelos de botoes e inputs legais</Link>
    </div>
  )
}