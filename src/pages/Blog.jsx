import BlogItems from "../components/BlogItems"
import HeroInformation from "../components/HeroInformation"

const Blog = () => {
  return (
    <>
      <div className="py-10 px-10  md:px-20">
        <HeroInformation title={"Our Blog & Articles"}/>
        <BlogItems/>
      </div>
    </>
  )
}

export default Blog
