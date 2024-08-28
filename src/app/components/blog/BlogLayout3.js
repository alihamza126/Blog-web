import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogLayout3 = ({ Blog }) => {
    return (
        <div className=" group flex flex-col justify-center items-start gap-4">
            <Link href={Blog.url_path} className="h-full rounded-xl overflow-hidden">
                <Image src={Blog.image.filePath.replace("../public", "")}
                    blurDataURL={Blog.image.blurhashDataUrl}
                    placeholder="blur"
                    className="  aspect-[4/4]  object-center object-cover rounded-xl z-10
           group-hover:scale-105 transition-all ease-in-out duration-300"
                    width={Blog.image.width}
                    height={Blog.image.height}
                    alt={Blog.title}
                />
            </Link>
            <div className="h-full flex flex-col">
                <span className='inline-block text-bold dark:text-accentDark text-accent font-semibold  text-sm'>{Blog.tags[0]}</span>
                <Link href={Blog.url_path} className='inline-block   col-span-8 rounded-xl'>
                    <h2 className="capitalize font-semibold text-base sm:text-2xl">
                        <span className="bg-gradient-to-r from-accent/50 to-accent/50 dark:from-accentDark/50 dark:to-accentDark bg-[length:0px_4px] rounded-sm 
                        group-hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-all ease-in-out duration-150 sm:text-sm  text-xs">
                            {Blog.title}
                        </span>
                    </h2>
                </Link>
                <span className='inline-block  text-sm text-dark/50 dark:text-light/60'>
                    {format(new Date(Blog.publishedAt), 'MMMM-dd-yyyy')}
                </span>
            </div>

        </div>
    )
}

export default BlogLayout3