import { NavLink } from "react-router-dom"


const OurBlog = () => {
    return (
        <>
            <div className="bg-[#F9F9F7]  py-20 px-10 md:px-20 ">
                <div className="flex justify-between items-center flex-wrap">
                    <h3 className="heading text-4xl">Our Blog & Articles</h3>
                    <NavLink to="/blog" className="py-2 px-2 text-xs md:text-sm md:px-4 bg-[#AD343E] text-white cursor-pointer rounded-full font-medium">Read All Articles</NavLink>
                </div>

                <div className="pt-20 flex flex-wrap justify-center  items-center  gap-7">
                    <div className="w-[33rem] bg-white shadow-lg rounded-md">
                        <img src="images/Mask group (1).png" alt="burger image" />
                        <div className="p-7 space-y-3">
                            <p className="text-[#8D9181]">January 3, 2023</p>
                            <h6>The secret tips & tricks to prepare a perfect burger & pizza for our customers</h6>
                            <p className="text-[#94968D]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis porro dolorum maiores, nostrum, eum excepturi, officiis sint error molestiae delectus ad ipsum voluptate? Accusantium, pariatur similique!</p>
                        </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="w-60 bg-white shadow-lg rounded-md overflow-hidden">
                            <img src="images/Mask group (2).png" alt="burger image" />
                            <div className="p-5 space-y-3">
                                <p className="text-[#8D9181] text-sm">January 3, 2023</p>
                                <h6>How to prepare the perfect french fries in an air fryer</h6>
                            </div>
                        </div>
                        <div className="w-60 bg-white shadow-lg rounded-md overflow-hidden">
                            <img src="images/Mask group (3).png" alt="burger image" />
                            <div className="p-5 space-y-3">
                                <p className="text-[#8D9181] text-sm">January 3, 2023</p>
                                <h6>How to prepare delicious chicken tenders</h6>
                            </div>
                        </div>
                        <div className="w-60 bg-white shadow-lg rounded-md overflow-hidden">
                            <img src="images/Mask group (4).png" alt="burger image" />
                            <div className="p-5 space-y-3">
                                <p className="text-[#8D9181] text-sm">January 3, 2023</p>
                                <h6>7 delicious cheesecake recipes you can prepare</h6>
                            </div>
                        </div>
                        <div className="w-60 bg-white shadow-lg rounded-md overflow-hidden">
                            <img src="images/Mask group (5).png" alt="burger image" />
                            <div className="p-5 space-y-3">
                                <p className="text-[#8D9181] text-sm">January 3, 2023</p>
                                <h6>5 great pizza restaurants you should visit this city</h6>
                            </div>
                        </div>
                        
                        



                    </div>
                </div>
            </div>
        </>
    )
}

export default OurBlog
