import { technologies } from "../../../data/technologies"
import { TechnologiesCard } from "./TechnologiesCard/TechnologiesCard"

export const TechnologiesSection = () => {
    return (
        <section>
            <h2 className="title2">Tecnologias</h2>
            <ul>
                {technologies.map(tech => {
                    return (
                        <li key={tech.id}><TechnologiesCard name={tech.name} img={tech.img} className='techList' /></li>
                    )
                })}
            </ul>
        </section>
    )
}