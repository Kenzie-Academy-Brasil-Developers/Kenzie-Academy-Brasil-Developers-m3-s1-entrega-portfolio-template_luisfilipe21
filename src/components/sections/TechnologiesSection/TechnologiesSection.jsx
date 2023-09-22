import { technologies } from "../../../data/technologies"
import { TechnologiesCard } from "./TechnologiesCard/TechnologiesCard"

import style from './tech.module.css';

export const TechnologiesSection = () => {
    return (
        <section className={`container ${style.tech}`} >
            <h2 className="title2">Tecnologias</h2>
            <ul className={style.techList}>
                {technologies.map(tech => {
                    return (
                        <li key={tech.id}><TechnologiesCard name={tech.name} img={tech.img}/></li>
                    )
                })}
            </ul>
        </section>
    )
}