import { Footer } from "../../Footer/Footer"
import { Header } from "../../Header/Header"

export const PageTemplate = ({children}) => {
    return(
        <>
        <Header />
        <main>
            {children}
        </main> 
        <Footer />
        </>
    )
}