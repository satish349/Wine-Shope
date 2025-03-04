import SliderPage from "./slider";
import CardTab from "./cardtab/page";
import AboutPages from "./about/page";
import CategoryPage from "../catagory/page";
import FooterPage from "../footer/page";
const Page = () => {
    return(
        <>
            <hr style={{color:'white'}} />
            <hr style={{color:'white'}} />
            <hr style={{color:'white'}} />
            <SliderPage/>
            <AboutPages/>
            <CardTab/>
            <CategoryPage/>
            <FooterPage/>
        </>
    )
}
export default Page;