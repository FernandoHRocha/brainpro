function Main(){
    return (
        <header>
            <nav className="cabecalho">   
                <a href="https://www.brainpro.com.br/" className="cabecalho__logo">
                    <img src="https://cdn.awsli.com.br/400x300/1628/1628166/logo/25350005a0.png" alt="BRAINPRO TECNOLOGIA" />
                </a>
                <div className="utilidades">
                    <form action="/buscar" className="cabecalho__busca" method='get'>
                        <input type="text" className="cabecalho__busca" placeholder='Olá, digite o que você procura...'/>
                    </form>
                    <div className="cabecalho__opcoes">
                        <div className="cabecalho__opcao">
                            😀
                            <p>MINHA CONTA</p>
                        </div>
                        <div className="cabecalho__opcao">
                            ❤
                            <p>FAVORITOS</p>
                        </div>
                        <div className="cabecalho__opcao">
                            ❔
                            <p>ATENDIMENTO</p>
                        </div>
                        <div className="cabecalho__opcao">
                            🏎
                            <p>CARRINHO</p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Main