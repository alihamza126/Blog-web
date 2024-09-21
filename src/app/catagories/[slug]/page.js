import { allBlogs } from "@/.contentlayer/generated";
import GithubSlugger, { slug } from "github-slugger";
import Catagoires from "../../components/blog/Catagoires";
import BlogLayout3 from "../../components/blog/BlogLayout3";


const slugger = new GithubSlugger();
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const allCatagories = [];
  const paths = [{ slug: 'all' }];


  allBlogs.map((blog) => {
    if (blog.isPublished && blog.tags.length > 0) {
      let firstTag = blog.tags[0];
      let slugfiy = slugger.slug(firstTag);
      if (!allCatagories.includes(slugfiy)) {
        allCatagories.push(slugfiy);
        paths.push({ slug: slugfiy });
      }
    }
  });

  return paths
}

export async function generateMetadata({ params }) {
  return {
    title: params.slug.replaceAll("-", " "),
    description: `Learn from highly recommended articles about ${params.slug == 'all' ? "web development" : params.slug.replaceAll("-", "")}`
  }
}



const page = ({ params }) => {
  const allCatagories = ['all'];
  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some(tag => {
      const slugfied = slug(tag)
      if (!allCatagories.includes(slugfied)) {
        allCatagories.push(slugfied)
      }
      if (params.slug === 'all') {
        return true;
      }
      return slugfied === params.slug
    })
  })

  return (
    <article className="flex flex-col mt-12 text-dark dark:text-light">
      <div className="flex flex-col px-10 sm:px-32">
        <h1 className="mt-3 sm:mt-6 font-semibold text-4xl">#{params.slug}</h1>
        <span className="mt-2 inline-block">Discover more blogs to expand your khownledge!</span>
      </div>
      <Catagoires Catagoires={allCatagories} currentSlug={params.slug} />
      <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-6 mt-24 px-4 sm:px-32">
        {
          blogs.map((ele, index) => (
            <article key={index} className=" col-span-1 row-span-1 relative">
              <BlogLayout3 Blog={ele} />
            </article>
          ))
        }
      </div>
    </article>
  )
}

export default page