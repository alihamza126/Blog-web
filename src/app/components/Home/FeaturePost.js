import { sortBlog } from "../../utils";
import BlogLayout1 from "../blog/BlogLayout1";
import BlogLayout2 from "../blog/BlogLayout2";

const FeaturePost = ({ blogs }) => {
    const sortedBlog = sortBlog(blogs);
    const Blog = sortedBlog[1];

    return (
        <div className="w-full mt-5 md:mt-10 flex flex-col items-center justify-center p-5 sm:px-10 md:px-24 sxl:px-32 ">
            <h2 className=" w-full text-bold text-2xl md:text-4xl capitalize text-dark inline-block dark:text-light/80">Feature Posts</h2>

            <article className="grid grid-cols-2 grid-rows-2 gap-6 mt-5 md:mt-14">
                <article className="col-span-2 sxl:col-span-1 row-span-2 relative overflow-hidden">
                    <BlogLayout1 Blog={Blog} />
                </article>
                <article className=" col-span-2 sm:col-span-1 row-span-1 relative dark:text-light/80">
                    <BlogLayout2 Blog={sortedBlog[1]} />
                </article>
                <article className=" col-span-2 sm:col-span-1 row-span-1 relative  dark:text-light/80" >
                    <BlogLayout2 Blog={sortedBlog[2]} />
                </article>
            </article>

        </div>
    )
}

export default FeaturePost