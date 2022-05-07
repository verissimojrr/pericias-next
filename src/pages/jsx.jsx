export default function jsx() {
    const a = 2
    const b = 7

    const titulo = <span>O valor que está no sistema é {a*b}</span>
    const subtitulo = () => <h3>estamos  testando funcoes</h3>
    const numeroAleatorio = <p>{Math.random()}</p>
    const legal = <h3>{'Muito legal'.toLocaleUpperCase()}</h3>

    return (
        <div>
            {titulo}
            {subtitulo()}
            {numeroAleatorio}
            {legal}
            <h4>{JSON.stringify({nome: 'Augusto', idade: 38})}</h4>
        </div>
    )
}