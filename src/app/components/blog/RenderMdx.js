"use client"

import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'

const mdxComponent = {
    Image
}

const RenderMdx = ({ Blog }) => {
    const MDXContent = useMDXComponent(Blog.body.code)

    return (
        <div className='prose sm:prose-base md:prose-lg max-w-max 
        prose-blockquote:bg-accent/20
        prose-blockquote:p-2 
        prose-blockquote:px-6 
        prose-blockquote:border-accent
        prose-blockquote:not-italic
        prose-blockquote:rounded-r-lg
        prose-li:marker:text-accent
        dark:prose-invert
        dark:prose-blockquote:bg-accentDark/70
        dark:prose-li:marker:text-accentDark/70 
         prose-thead:bg-accent
         dark:prose-thead:bg-accentDark/80
         prose-thead:pt-4
        first-letter:text-5xl
        dark:prose-h2:text-accentDark
        '>
            <MDXContent components={mdxComponent} />
        </div>
    )
}

export default RenderMdx