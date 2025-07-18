import AboutInformation from "../components/AboutInformation"
import AboutUsSection from "../components/AboutUsSection"
import CustomerReviews from "../components/CustomerReviews"
import ServicesAbout from "../components/ServicesAbout"

const About = () => {
  return (
    <>
      <div>
        <AboutUsSection image={"images/Image (3).png"} noButton />
        <div className='py-20 px-10 md:px-20 bg-[url("images/BG-1.png")] h-[40rem] flex items-center justify-center
      '>
          <h4 className="heading text-white text-4xl w-96">Fell the authentic & original taste from us</h4>
        </div>
        <ServicesAbout />
        <AboutInformation />
        <CustomerReviews />
      </div>
    </>
  )
}

export default About
