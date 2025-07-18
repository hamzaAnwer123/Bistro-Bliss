import { NavLink } from "react-router-dom";
import HeroInformation from "./HeroInformation";

const RelatedBlog = ({ relatedBlogs }) => {
  if (relatedBlogs.length === 0) {
    return <p>No related blogs found.</p>;
  }

  return (
    <div >
      <HeroInformation title={"Read More Articles"}/>
      <div className="flex justify-center flex-wrap gap-7 py-8">

        {relatedBlogs.map((blog) => (
          <NavLink to={`/blog/${blog.id}`} key={blog.id} className="shadow-md rounded-xl w-80 cursor-pointer ">
            <img className="w-full" src={blog.image} alt="" />
            <div className="p-6 space-y-3">
              <span className="text-[#767B68] text-sm">{blog.date}</span>
              <p className="text-xl">{blog.short_description}</p>
            </div>
          </NavLink>
          
        ))}
      </div>
    </div>
  );
};

export default RelatedBlog;