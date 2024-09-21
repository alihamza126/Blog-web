import Image from "next/image"
import Tags from "../elements/Tags"
import Link from "next/link"
import { slug } from "github-slugger"

const BlogLayout1 = ({ Blog }) => {
    return (
        <div className=" group w-full inline-block overflow-hidden rounded-xl">
            <div className="absolute h-full right-0 left-0 top-0 bottom-0 bg-gradient-to-b from-transparent from-0% to-dark/90 z-0
                rounded-xl
                "></div>

            <Image src={Blog.image.filePath.replace("../public", "")}
                blurDataURL={Blog.image.blurhashDataUrl}
                placeholder="blur"
                className="w-full h-full object-center  rounded-xl z-10
                group-hover:scale-105 transition-all ease-in-out duration-300"
                width={Blog.image.width}
                height={Blog.image.height}
                alt={Blog.title}
            />
            <div className=" absolute bottom-1 w-full p-3 sm:p-4  text-light z-20 ">
                <Tags className='px-4 sm:px-6 text-sm !border' link={`/catagories/${slug(Blog.tags[0])}`} name={Blog.tags[0]} />
                <Link href={Blog.url_path}>
                    <h2 className=" mt-2 sm:mt-4 capitalize font-semibold xs:text-base sm:text-xl md:text-2xl">
                        <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_4px] rounded-sm 
                         group-hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-all ease-in-out duration-150 ">
                            {Blog.title}
                        </span>
                    </h2>
                </Link>
            </div>
        </div>
    )
}

export default BlogLayout1
