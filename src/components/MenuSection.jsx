import { NavLink } from "react-router-dom"


const MenuSection = () => {
  return (
    <div className="py-20 px-10 md:px-20">
      <h2 className="text-3xl py-16 text-center font-medium heading">Browse Our Menu</h2>
      <div className="flex justify-center items-center flex-wrap gap-4">
        <NavLink to="/menu/Breakfast" className="w-72 border-2 border-[#E9ECE2] flex flex-col justify-center items-center space-y-6 py-7 px-4 rounded-md">
            <img className="w-16 " src="images/icon-01.png" alt="breakfast-icon" />
            <h4 className="text-xl font-medium">Breakfast</h4>
            <p className="text-center">In the new era of technology we look in the future with certainty and pride for our life.</p>
            <p className="text-[#AF3B44] font-semibold cursor-pointer">Explore Menu</p>
        </NavLink>
        <NavLink to="/menu/Main Dishes" className="w-72 border-2 border-[#E9ECE2] flex flex-col justify-center items-center space-y-6 py-7 px-4 rounded-md">
            <img className="w-16 " src="images/icon-02.png" alt="breakfast-icon" />
            <h4 className="text-xl font-medium">Main Dishes</h4>
            <p className="text-center">In the new era of technology we look in the future with certainty and pride for our life.</p>
            <p className="text-[#AF3B44] font-semibold cursor-pointer">Explore Menu</p>
        </NavLink>
        <NavLink to="/menu/Drinks" className="w-72 border-2 border-[#E9ECE2] flex flex-col justify-center items-center space-y-6 py-7 px-4 rounded-md">
            <img className="w-16 " src="images/icon-03.png" alt="breakfast-icon" />
            <h4 className="text-xl font-medium">Drinks</h4>
            <p className="text-center">In the new era of technology we look in the future with certainty and pride for our life.</p>
            <p className="text-[#AF3B44] font-semibold cursor-pointer">Explore Menu</p>
        </NavLink>
        <NavLink to="/menu/Desserts" className="w-72 border-2 border-[#E9ECE2] flex flex-col justify-center items-center space-y-6 py-7 px-4 rounded-md">
            <img className="w-16 " src="images/icon-04.png" alt="breakfast-icon" />
            <h4 className="text-xl font-medium">Desserts</h4>
            <p className="text-center">In the new era of technology we look in the future with certainty and pride for our life.</p>
            <p className="text-[#AF3B44] font-semibold cursor-pointer">Explore Menu</p>
        </NavLink>
      </div>
    </div>
  )
}

export default MenuSection
