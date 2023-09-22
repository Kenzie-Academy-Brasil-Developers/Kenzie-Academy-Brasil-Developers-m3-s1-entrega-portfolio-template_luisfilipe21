import style from './cardTech.module.css'

export const TechnologiesCard = ({name, img}) => {
    return (
    <div className={style.techInfo}>
        <img src={img}></img>
        <h3 className="title3">{name}</h3>
    </div>
    )


}