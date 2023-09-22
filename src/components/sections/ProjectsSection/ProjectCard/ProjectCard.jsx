import Git from '../../../../assets/git-icon.png'
import style from './card.module.css'

export const ProjectCard = ({name, description}) => {
    return(
        <div className={style.divInfo}>
            <img className={style.gitLogo} src={Git}/>
            <h3 className="title3">{name}</h3>
            <p className="paragraph">{description}</p>

            <a className="saibaMais">Saiba mais</a>
        </div>
    )
}