import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <footer className="bg-[#474747] text-white py-20 px-10 md:px-20 ">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10  md:justify-items-center">

                    {/* footer  top  */}
                    <div className="space-y-5">
                        <div className="flex gap-3 items-center">
                            <img src="images/Vector.png" alt="logo" />
                            <h4 className="heading text-2xl italic">Bistro Bliss</h4>
                        </div>
                        <p className="text-[#8E9089]">In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
                        <div className="flex gap-3 items-center">
                            <NavLink to='https://twitter.com/' target="_blank" rel="noopener noreferrer">
                            <img src="images/1.png" alt="twitter" />
                            </NavLink>
                            <NavLink to='https://www.facebook.com/' target="_blank" rel="noopener noreferrer">
                            <img src="images/2.png" alt="facebook" />
                            </NavLink>
                            <NavLink to='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">
                            <img src="images/3.png" alt="facebook" />
                            </NavLink>
                            <NavLink to='https://github.com/' target="_blank" rel="noopener noreferrer">
                            <img src="images/4.png" alt="facebook" />
                            </NavLink>
                           
                        </div>
                    </div>

                    <div className="space-y-5">
                        <h5>Pages</h5>
                        <ul className="text-[#8E9089] space-y-5 flex flex-col">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/menu/All">Menu</NavLink>
                            <NavLink to="/blog">Blog</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                            <NavLink to="/book-table">Book A Table</NavLink>
                        </ul>
                    </div>
                    <div className="space-y-5">
                        <h5>Utility</h5>
                        <ul className="text-[#8E9089] space-y-5">
                            <li>Start Here</li>
                            <li>Styleguide</li>
                            <li>Password Protected</li>
                            <li>404 Not Found</li>
                            <li>Licenses</li>
                            <li>Changelog</li>
                            <li>View More</li>
                        </ul>
                    </div>
                    <div className="space-y-5">
                        <h5>Follow Us On Instagram</h5>
                        <img src="images/img (1).png" alt="image" />
                    </div>
                </div>

                {/* footer bottom */}
                <div className="w-full text-center border-t-2 border-t-[#414536] mt-12 pt-7">
                    <p className="text-[#8E9089]">Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
