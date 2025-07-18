import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom"

const Navbar = () => {
     const [menu,setMenu] = useState(false);
        const handelMenuClink = () =>{
            setMenu(!menu);
        };
    return (
        <>
            <nav className=" flex justify-between items-center py-4 px-7 md:px-20 bg-[#F9F9F7] z-50 sticky top-0 left-0">
                <NavLink to="/" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="logo" />
                    <span className="text-xl md:text-3xl font-medium heading italic">Bistro Bliss</span>
                </NavLink>
                <div className="lg:flex gap-5 font-medium hidden items-center">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "bg-[#DBDFD0] rounded-full py-1 px-3" : ""
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "bg-[#DBDFD0] rounded-full py-1 px-3" : ""
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/menu/All"
                        className={({ isActive }) =>
                            isActive ? "bg-[#DBDFD0] rounded-full py-1 px-3" : ""
                        }
                    >
                        Menu
                    </NavLink>
                    <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                            isActive ? "bg-[#DBDFD0] rounded-full py-1 px-3" : ""
                        }
                    >
                        Blog
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "bg-[#DBDFD0] rounded-full py-1 px-3" : ""
                        }
                    >
                        Contact
                    </NavLink>

                </div>
                <div className="flex items-center gap-4">
                <NavLink to="/book-table" className="py-2 px-2 text-xs md:text-base md:px-4 border-[#7F817A] border-2 rounded-full font-medium hover:bg-[#AD343E] hover:border-[#AD343E] hover:text-white cursor-pointer ">Book A Table</NavLink>
                <FaBars onClick={handelMenuClink} className="text-xl block lg:hidden cursor-pointer"/>
                </div>
                {/* Slide-in Menu */}
                <div className={`absolute top-0 right-0 bg-white  h-screen flex w-full items-center justify-center space-y-10 text-xl z-50 transform transition-transform duration-300 ease-in-out flex-col ${menu ? "translate-x-0 flex" : "translate-x-full hidden"}`}>
                <FaTimes  className="top-8 right-8 absolute cursor-pointer" onClick={handelMenuClink} />
                <NavLink to="/" onClick={handelMenuClink}
                        className={({ isActive }) =>
                            isActive ? "bg-[#DBDFD0] rounded-full py-1 px-3" : ""
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/about" onClick={handelMenuClink}
                        className={({ isActive }) =>
                            isActive ? "bg-[#DBDFD0] rounded-full py-1 px-3" : ""
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/menu/All" onClick={handelMenuClink}
                        className={({ isActive }) =>
                            isActive ? "bg-[#DBDFD0] rounded-full py-1 px-3" : ""
                        }
                    >
                        Menu
                    </NavLink>
                    <NavLink
                        to="/blog" onClick={handelMenuClink}
                        className={({ isActive }) =>
                            isActive ? "bg-[#DBDFD0] rounded-full py-1 px-3" : ""
                        }
                    >
                        Blog
                    </NavLink>
                    <NavLink
                        to="/contact" onClick={handelMenuClink}
                        className={({ isActive }) =>
                            isActive ? "bg-[#DBDFD0] rounded-full py-1 px-3" : ""
                        }
                    >
                        Contact
                    </NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
