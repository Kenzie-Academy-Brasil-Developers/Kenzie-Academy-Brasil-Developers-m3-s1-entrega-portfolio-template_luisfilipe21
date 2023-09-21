import Banner from '../../../assets/banner-img.png'
import { username } from '../../../data/user'

export const BannerSection = () => {
    return (
        <section>
            <div>
                <span className='userName'>{username}</span>
                <h1 className="title1">Bem vindo ao meu portfólio</h1>
                <p className='paragraph'>Uma frase interessante sobre mim.</p>
                <button className="btn">Saiba mais</button>
            </div>
            <img src={Banner}></img>
        </section>
    )
}