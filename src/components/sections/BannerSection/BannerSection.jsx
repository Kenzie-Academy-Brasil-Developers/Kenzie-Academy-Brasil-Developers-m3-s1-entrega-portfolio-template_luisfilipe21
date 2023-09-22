import Banner from '../../../assets/banner-img.png'
import { username } from '../../../data/user'

import style from './banner.module.css'

export const BannerSection = () => {
    return (
        <section className="container">
            <div className={style.divMacro}>
                <div className={style.divBanner}>
                    <span className='userName'>{username}</span>
                    <h1 className="title1">Bem vindo ao meu portfólio</h1>
                    <p className='paragraph'>Uma frase interessante sobre mim.</p>
                    <button className="btn">Saiba mais</button>
                </div>
                <img src={Banner}></img>
            </div>
        </section>
    )
}