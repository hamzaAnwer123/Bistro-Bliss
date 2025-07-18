import { NavLink } from "react-router-dom";
import Data from "../../public/Json/Data.json";
const MenuItems = ({category}) => {
    
    const filterData = category === "All" ? Data : Data.filter((data) => data.category === category);   
    return (
        <>
            <div className="py-20 px-10 md:px-20">
                <div className="flex flex-wrap gap-5 justify-center text-center">
                    <NavLink to="/menu/All"  className={({ isActive }) =>
                            isActive ? "py-2 px-2 text-xs md:text-base md:px-10 bg-[#AD343E] text-white cursor-pointer rounded-full font-medium" : "hover:bg-[#AD343E] hover:border-[#AD343E] hover:text-white border-[#E5E8DD] border-2 py-2 px-2 text-xs md:text-base md:px-4 rounded-full"
                        }
                     >All</NavLink>
                    <NavLink to="/menu/Breakfast" className={({ isActive }) =>
                            isActive ? "py-2 px-2 text-xs md:text-base md:px-10 bg-[#AD343E] text-white cursor-pointer rounded-full font-medium" : "hover:bg-[#AD343E] hover:border-[#AD343E] hover:text-white border-[#E5E8DD] border-2 py-2 px-2 text-xs md:text-base md:px-4 rounded-full"
                        }>Breakfast</NavLink>
                    <NavLink to="/menu/Main Dishes" className={({ isActive }) =>
                            isActive ? "py-2 px-2 text-xs md:text-base md:px-10 bg-[#AD343E] text-white cursor-pointer rounded-full font-medium" : "hover:bg-[#AD343E] hover:border-[#AD343E] hover:text-white border-[#E5E8DD] border-2 py-2 px-2 text-xs md:text-base md:px-4 rounded-full"
                        }>Main Dishes</NavLink>
                    <NavLink to="/menu/Drinks" className={({ isActive }) =>
                            isActive ? "py-2 px-2 text-xs md:text-base md:px-10 bg-[#AD343E] text-white cursor-pointer rounded-full font-medium" : "hover:bg-[#AD343E] hover:border-[#AD343E] hover:text-white border-[#E5E8DD] border-2 py-2 px-2 text-xs md:text-base md:px-4 rounded-full"
                        }>Drinks</NavLink>
                    <NavLink to="/menu/Desserts"className={({ isActive }) =>
                            isActive ? "py-2 px-2 text-xs md:text-base md:px-10 bg-[#AD343E] text-white cursor-pointer rounded-full font-medium" : "hover:bg-[#AD343E] hover:border-[#AD343E] hover:text-white border-[#E5E8DD] border-2 py-2 px-2 text-xs md:text-base md:px-4 rounded-full"
                        }>Desserts</NavLink>
                    {/* <NavLink to="/menu/Breakfast" className="py-2 px-2 text-xs md:text-base md:px-4 hover:bg-[#AD343E] hover:border-[#AD343E] hover:text-white cursor-pointer border-[#E5E8DD] border-2 rounded-full font-medium">Breakfast</NavLink>
                    <NavLink to="/menu/Main Dishes" className="py-2 px-2 text-xs md:text-base md:px-4 hover:bg-[#AD343E] hover:border-[#AD343E] hover:text-white cursor-pointer border-[#E5E8DD] border-2 rounded-full font-medium">Main Dishes</NavLink>
                    <NavLink to="/menu/Drinks" className="py-2 px-2 text-xs md:text-base md:px-4 hover:bg-[#AD343E] hover:border-[#AD343E] hover:text-white cursor-pointer border-[#E5E8DD] border-2 rounded-full font-medium">Drinks</NavLink>
                    <NavLink to="/menu/Desserts" className="py-2 px-2 text-xs md:text-base md:px-4 hover:bg-[#AD343E] hover:border-[#AD343E] hover:text-white cursor-pointer border-[#E5E8DD] border-2 rounded-full font-medium">Desserts</NavLink> */}
                </div>
                <div>
                    <div className="flex flex-wrap gap-4 justify-center pt-20">
                        {
                            filterData.map((item, index) => (
                                <div key={index} className="border-[#E5E8DD] border-2 rounded-xl overflow-hidden w-72 ">
                                    <img className="h-56 w-full" src={item.image} alt="eggs" />
                                    <div className="text-center p-7 space-y-3">
                                        <p className="text-[#AB2F39] text-xl font-semibold">$ {item.price}</p>
                                        <h5 className="font-semibold">{item.name}s</h5>
                                        <p className="text-[#656D79] text-sm">{item.short_description}</p>
                                    </div>
                                </div>
                            )
                            )}
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuItems
