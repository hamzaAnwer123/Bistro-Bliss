import { NavLink } from "react-router-dom"

const HomeHero = () => {
    return (
        <>
            <div className='bg-[url("images/bg.png")] space-y-6 bg-center bg-cover h-screen bg-no-repeat bg-opacity-25 flex flex-col justify-center items-center px-20 '>
                <h1 className='heading text-6xl font-medium text-center w-96 '>Best food for  your taste</h1>
                <p className='w-96 text-font text-center font-medium text-[#91938D]'>Discover delectable cuisine and unforgettable moments in out welcoming, culinary haven.</p>

                <div className='flex gap-4 '>
                    <button className="py-2 px-2 text-xs md:text-base md:px-4 bg-[#AD343E] text-white cursor-pointer rounded-full font-medium">
                    <NavLink to="/book-table" >Book A Table</NavLink></button>
                  
                    <button  className="py-2 px-2 text-xs md:text-base md:px-4 hover:bg-[#AD343E] hover:border-[#AD343E] hover:text-white cursor-pointer border-[#7F817A] border-2 rounded-full font-medium">
                    <NavLink to="/menu/All">
                    Explore Menu
                    </NavLink>
                    </button>
                </div>
            </div>
        </>
    )
}

export default HomeHero
