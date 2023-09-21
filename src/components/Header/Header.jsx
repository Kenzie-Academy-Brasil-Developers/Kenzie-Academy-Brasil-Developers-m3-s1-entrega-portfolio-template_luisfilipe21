import logo from '../../assets/portfolio.png'

export const Header = () => {
    return (
        <>
            <header className="header">
                <img src={logo} alt="Logo" />
                <nav>
                    <a href="">Sobre</a>
                    <a href="">Stack</a>
                    <a href="">Projetos</a>
                </nav>
                <p className='btn'>Contato</p>
            </header>
        </>
    )
}