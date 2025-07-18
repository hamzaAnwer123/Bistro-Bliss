import AboutUsSection from "../components/AboutUsSection"
import CustomerReviews from "../components/CustomerReviews"
import HomeHero from "../components/HomeHero"
import MenuSection from "../components/MenuSection"
import OurBlog from "../components/OurBlog"
import ServicesSection from "../components/ServicesSection"
import UniqueServices from "../components/UniqueServices"


const Home = () => {
  return (
    <>
    <HomeHero/>
    <MenuSection/>
    <AboutUsSection image={"images/Image.png"}/>
    <UniqueServices/>
    <ServicesSection/>
    <CustomerReviews/>
    <OurBlog/>
    </>
  )
}

export default Home
