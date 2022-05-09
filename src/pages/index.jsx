import Link from "next/link"

export default function Inicio(params) {
  return (
    <div>
      <h1>Inicio</h1>
      <h2>Vamos estudar o Next.Js</h2>
      <Link href='/estiloso'>Ir para estiloso</Link>
    </div>
  )
}