import { NavLink } from 'react-router-dom'
import BlogData from '../../public/Json/BlogData.json'
const BlogItems = () => {
    return (
        <>
            <div className="py-20 px-10 md:px-20 flex gap-5 justify-center flex-wrap">
                {
                    BlogData.map((item, index) => (
                        <NavLink to={`/blog/${item.id}`} key={index} className="shadow-md rounded-xl w-80 cursor-pointer ">
                            <img className="w-full" src={item.image} alt="" />
                            <div className="p-6 space-y-3">
                                <span className="text-[#767B68] text-sm">{item.date}</span>
                                <p className="text-xl">{item.short_description}</p>
                            </div>
                        </NavLink>
                    ))
                }
            </div>
        </>
    )
}

export default BlogItems
