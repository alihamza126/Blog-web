import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogLayout2 = ({ Blog }) => {
  return (
    <div className=" overflow-hidden group h-full mt-2 sm:mt-0  grid grid-cols-12 items-center gap-x-4">
      <Link href={Blog.url_path} className="col-span-12 lg:col-span-4 h-full rounded-xl overflow-hidden">
        <Image src={Blog.image.filePath.replace("../public", "")}
          blurDataURL={Blog.image.blurhashDataUrl}
          placeholder="blur"
          className=" w-full h-full group-hover:scale-105 transition-all  ease-linear duration-200 aspect-square  object-center object-cover rounded-xl z-10"
          width={Blog.image.width}
          height={Blog.image.height}
          alt={Blog.title}
        />
      </Link>
      <div className="col-span-12 lg:col-span-8 h-ful">
        <span className='inline-block w-full text-bold text-accent font-semibold  text-xs sm:text-sm dark:text-accentDark'>{Blog.tags[0]}</span>
        <Link href={Blog.url_path} className='inline-block  mt-2 mb-0 sm:mb-3 col-span-8 rounded-xl'>
          <h2 className="capitalize sm:font-semibold text-xs sm:text-lg pr-2">
            <span className="bg-gradient-to-r from-accent/50 to-accent/50 dark:from-accentDark/50 dark:accent-accentDark bg-[length:0px_4px] rounded-sm 
                        group-hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-all ease-in-out duration-150 text-xs sm:text-sm">
              {Blog.title}
            </span>
          </h2>
        </Link>
        <span className=' inline-block w-full text-xs sm:text-sm text-dark/50 dark:text-light/50 '>
          {format(new Date(Blog.publishedAt), 'MMMM-dd-yyyy')}
        </span>
      </div>

    </div>
  )
}

export default BlogLayout2