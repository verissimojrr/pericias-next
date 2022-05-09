const Cabecalho = props => {
    console.log(props)
    return (
        <header>
            <h1>{props.nome}</h1>
        </header>
    )
}

export default Cabecalho
