import Git from '../../assets/github-icon.png'
import LinkedIn from '../../assets/linkedin-icon.png'
import Whats from '../../assets/whatsapp-icon.png'


export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div>
                    <h3>Contato</h3>
                    <img src={Whats} alt="WhatsApp" />
                    <img src={LinkedIn} alt="LinkedIn" />
                    <img src={Git} alt="Git Hub" />
                </div>
                <p>Todos os direitos reservados - José da Silva</p>
            </footer>
        </>
    )
}