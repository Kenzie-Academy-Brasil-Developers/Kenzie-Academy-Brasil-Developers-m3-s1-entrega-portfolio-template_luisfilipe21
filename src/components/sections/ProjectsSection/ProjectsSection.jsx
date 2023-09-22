import { projects } from "../../../data/projects"
import { ProjectCard } from "./ProjectCard/ProjectCard"

import style from './section.module.css'

export const ProjectsSection = () => {
    return (
        <section className="container">
            <div className={style.projectSection}>
                <h2 className="title2">Projetos</h2>
                <ul>
                    {projects.map(project => {
                        return (
                            <li className={style.projectList} key={project.id}>
                                <ProjectCard name={project.name} description={project.description} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}