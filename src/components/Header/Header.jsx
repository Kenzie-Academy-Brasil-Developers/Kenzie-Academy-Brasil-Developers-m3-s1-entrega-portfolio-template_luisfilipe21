import logo from '../../assets/portfolio.png'

import style from './style.module.css'
export const Header = () => {
    return (
        
            <header className={`${style.header} container`}>
                <img src={logo} alt="Logo" />
                <nav>
                    <a href="" className='text1'>Sobre</a>
                    <a href="" className='text1'>Stack</a>
                    <a href="" className='text1'>Projetos</a>
                </nav>
                <p className='btn'>Contato</p>
            </header>
        
    )
}