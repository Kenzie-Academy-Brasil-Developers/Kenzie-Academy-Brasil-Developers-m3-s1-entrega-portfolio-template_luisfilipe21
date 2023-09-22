import Git from '../../assets/github-icon.png'
import LinkedIn from '../../assets/linkedin-icon.png'
import Whats from '../../assets/whatsapp-icon.png'

import style from './footer.module.css'

export const Footer = () => {
    return (
        <>
            <footer className='container'>
                <div className={style.footer}>
                    <div className={style.contactDiv}>
                        <h3 className='title2'>Contato</h3>
                        <div className={style.imgDiv}>
                            <img src={Whats} alt="WhatsApp" />
                            <img src={LinkedIn} alt="LinkedIn" />
                            <img src={Git} alt="Git Hub" />
                        </div>
                    </div>
                    <p className='paragraph'>Todos os direitos reservados - José da Silva</p>
                </div>
            </footer>
        </>
    )
}