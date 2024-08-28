import Link from "next/link"
import { sortBlog } from "../../utils";
import BlogLayout3 from "../blog/BlogLayout3";

const RecentPosts = ({ blogs }) => {
    const sortedBlog = sortBlog(blogs);
    return (
        <div className="w-full mt-10 flex flex-col items-center justify-center p-5 sm:px-10 md:px-24 sxl:px-32">
            <div className=" w-full flex justify-between">
                <h2 className=" w-fit text-bold text-2xl md:text-4xl capitalize text-dark inline-block dark:text-light/80">Recent Posts</h2>
                <Link href={"/catagories/all"} className=" text-accent underline inline-block  text-base md:text-lg">View All</Link>
            </div>

            <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16  dark:text-light/80">
                {
                    sortedBlog.slice(0,6).map((blog, index) =>
                    (
                        <div className=" row-span-1 col-span-1  "><BlogLayout3 Blog={blog} /></div>
                    ))
                }
            </div>

        </div>
    )
}

export default RecentPosts