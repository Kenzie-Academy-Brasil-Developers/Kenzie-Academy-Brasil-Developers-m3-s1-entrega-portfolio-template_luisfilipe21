import style from './about.module.css'

export const AboutSection = () => {
    return(
        <section className="container">
            <div className={style.divAbout}>
                <h2 className="title2">Sobre mim</h2>
                <div className={style.p}>
                <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis autem repellat dolores veritatis. Repudiandae minima quibusdam sit hic enim amet repellendus placeat voluptatum inventore dicta. Odit voluptate voluptatibus quia sit! 
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, et praesentium laboriosam ducimus ab culpa commodi minima consectetur dolores doloremque dolore dolor. Quia, aliquam quibusdam. Numquam eveniet explicabo quae dolor!</p>
                </div>
            </div>
        </section>
    )
}