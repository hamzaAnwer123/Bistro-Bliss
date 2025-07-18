import { useParams } from "react-router-dom";
import BlogData from "../../public/Json/BlogData.json"; 
import RelatedBlog from "../components/RelatedBlog";

const BlogDetails = () => {
  const { id } = useParams();
  const filterData = BlogData.filter((data) => data.id === parseInt(id, 10));

  if (filterData.length === 0) {
    return <div>Blog not found</div>;
  }
  const blog = filterData[0];

  const relatedBlogs = BlogData.filter(
    (data) => data.category === blog.category && data.id !== blog.id
  );

  return (
    <>
      <div className="py-20 px-10 md:px-28 bg-[#F9F9F7]">
        <div className="flex flex-col justify-center  items-center space-y-12 ">

          <h1 className="heading text-5xl text-center  ">{blog.short_description}</h1>
          <img className="w-full" src={blog.image} alt="" />
          <p className=" text-xl">{blog.description}</p>
        </div>
      </div>
        <RelatedBlog relatedBlogs={relatedBlogs} />
    </>
  );
};

export default BlogDetails;