import { NavLink } from "react-router-dom";

const AboutUsSection = ( {image ,noButton}) => {
    return (
        <>
            <div className="bg-[#F9F9F7] flex flex-wrap justify-center gap-32 py-20 px-10 md:px-20 ">
                <div className="w-[29rem] relative">
                    <img  src={image} alt="image" />
                    <div className="bg-[#474747] text-white w-[92%] md:w-[70%] h-3/4 md:h-3/5 p-5 rounded-md overflow-hidden space-y-3 md:space-y-5 absolute bottom-[-2rem] right-[-2rem]">
                        <p className="text-lg">come and visit us</p>
                        <p className="flex gap-4 text-sm items-start"><img src="images/phone.png" alt="phone icon" /> (414) 857 - 0107</p>
                        <p className="flex gap-4 text-sm items-start"><img  src="images/mail.png" alt="main icon" /> happytummy@restaurant.com</p>
                        <p className="flex gap-4 text-sm items-start"><img src="images/location.png" alt="location.png icon" /> 837 W. Marshell Lane Marshelltown IA 50158, Los Angeles</p>
                    </div>
                </div>
                <div className="w-[25rem] space-y-5">
                    <h3 className="heading text-4xl">We provide healthy food for your family.</h3>
                    <p>Our story with a vision to create a unique dining experience that merges fine dining , exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.  </p>
                    <p className="text-[#94968D]">At place, we believe that dining is not about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strive to make every visit an un forgettable event.</p>
                    <div className={` ${noButton ? 'hidden' : "block"}`}>

                    <NavLink to="/about" className="py-2 px-2 text-xs md:text-base md:px-4 border-[#7F817A] border-2 rounded-full font-medium hover:bg-[#AD343E] hover:border-[#AD343E] hover:text-white cursor-pointer ">More About Us</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsSection;