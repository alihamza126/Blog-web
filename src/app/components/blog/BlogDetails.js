import { format, parseISO } from "date-fns"
import Link from "next/link";
import { slug } from "github-slugger";


const BlogDetails = ({ Blog, slug: blogSlug }) => {
    return (
        <div className=" bg-accent dark:bg-accentDark/80 dark:text-dark flex justify-around items-center rounded-lg text-lg md:text-xl 
        py-2 mx-1 md:mx-10 font-medium text-white/90">
            <time>
                {format(parseISO(Blog.publishedAt), 'LLLL d,    yyyy')}
            </time>
            <span>
                {Blog.readingTime.text}
            </span>
            <Link href={`/catagories/${slug(Blog.tags[0])}`}>
                #{Blog.tags[0]}
            </Link>
        </div>
    )
}

export default BlogDetails