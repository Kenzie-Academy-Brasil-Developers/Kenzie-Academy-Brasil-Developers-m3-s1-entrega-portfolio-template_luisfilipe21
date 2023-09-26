import { AboutSection } from "../../components/sections/AboutSection/AboutSection"
import { BannerSection } from "../../components/sections/BannerSection/BannerSection"
import { PageTemplate } from "../../components/sections/PageTemplate"
import { ProjectsSection } from "../../components/sections/ProjectsSection/ProjectsSection"
import { TechnologiesSection } from "../../components/sections/TechnologiesSection/TechnologiesSection"



export const LandingPage = () => {
    return (
        <>
        <PageTemplate>
            <BannerSection/>
            <AboutSection/>
            <TechnologiesSection/>
            <ProjectsSection/>
        </PageTemplate>
        </>
    )
}