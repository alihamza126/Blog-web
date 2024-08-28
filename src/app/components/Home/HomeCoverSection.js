import Image from "next/image"
import { sortBlog } from "../../utils/index"
import Tags from "../elements/Tags";
import Link from "next/link";
import { slug } from "github-slugger";

const HomeCoverSection = ({ blogs }) => {
    const sortedBlog = sortBlog(blogs);
    const firstBlog = sortedBlog[0];

    console.log(firstBlog.url_path)

    return (
        <div className="w-full inline-block">
            <article className="flex flex-col items-start justify-end relative h-[60vh] sm:h-[80vh] mx-4 sm:mx-10 ">
                <div className="absolute h-full right-0 left-0 top-0 bottom-0 bg-gradient-to-b from-transparent from-0% dark:to-dark/50 to-dark/90 z-0
                rounded-xl
                "></div>
                <Image src={firstBlog.image.filePath.replace("../public", "")}
                    blurDataURL={firstBlog.image.blurhashDataUrl}
                    placeholder="blur"
                    className=" w-full h-full  object-center object-cover rounded-xl -z-10"
                    fill
                    alt={firstBlog.title}
                />
                <div className="w-full lg:w-3/4 flex flex-col items-start justify-center p-16 text-light z-0">
                    <Tags className={''} link={`/catagories/${slug(firstBlog.tags[0])}`} name={firstBlog.tags[0]} />
                    <Link href={firstBlog.url_path}>
                        <h1 className=" mt-2 capitalize font-semibold text-lg sm:text-xl md:text-3xl lg:text-4xl">
                            <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark bg-[length:0px_4px] rounded-sm 
                        hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-all ease-in-out duration-150 ">
                                {firstBlog.title}
                            </span>
                        </h1>
                    </Link>
                    <h1 className="hidden sm:inline-block mt-4 md:text-lg lg:text-xl">{firstBlog?.description?.slice(0,175)}...</h1>
                </div>
            </article>
        </div>
    )
}

export default HomeCoverSection