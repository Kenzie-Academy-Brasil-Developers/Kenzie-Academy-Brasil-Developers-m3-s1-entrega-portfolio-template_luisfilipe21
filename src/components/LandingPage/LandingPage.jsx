import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { AboutSection } from "../sections/AboutSection/AboutSection"
import { BannerSection } from "../sections/BannerSection/BannerSection"
import { TechnologiesSection } from "../sections/TechnologiesSection/TechnologiesSection"


export const LandingPage = () => {
    return (
        <>
            <Header/>

            <BannerSection/>
            <AboutSection/>
            <TechnologiesSection/>

            <Footer/>
        </>
    )
}