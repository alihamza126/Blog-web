import { allBlogs } from "@/.contentlayer/generated";
import Image from "next/image";
import Tags from "../../components/elements/Tags";
import BlogDetails from "../../components/blog/BlogDetails";
import RenderMdx from "../../components/blog/RenderMdx";
import { slug } from "github-slugger";
import siteMetadata from "../../utils/SiteMetaData";
import { notFound } from "next/navigation";


export async function generateStaticParams() {
  const paths = allBlogs.map((blog) => ({
    BlogSlug: blog._raw.flattenedPath,
  }));

  console.log("Generated paths:", paths);  // This will log paths during build
  return paths;
}


export async function generateMetadata({ params }) {
  const Blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.BlogSlug);
  const publishedDate = new Date(Blog?.publishedAt)?.toISOString();
  const modifiedDate = new Date(Blog.updatedAt || publishedDate).toISOString();
  let imageList = [siteMetadata.socialBanner];
  if (Blog.image) {
    imageList = typeof Blog.image.filePath === 'string' ?
      [siteMetadata.siteUrl + Blog.image.filePath.replace("../public", "")] : Blog.image
  }
  let ogImages = imageList.map((img) => {
    return { url: img.includes('http') ? img : siteMetadata.siteUrl + img }
  });
  const authors = Blog.author ? [Blog.author] : siteMetadata.author;

  return {
    title: Blog.title,
    description: Blog.description,
    openGraph: {
      title: Blog.title,
      description: Blog.description,
      url: siteMetadata.siteUrl,
      siteName: siteMetadata.siteName,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedDate,
      modifiedTime: modifiedDate,
      images: ogImages,
      authors: authors.length > 0 ? authors : siteMetadata.author
    },
    twitter: {
      card: 'Social_Twitter_image',
      title: Blog.title,
      description: Blog.description,
      images: ogImages,
    },
  }
}

export default function Page({ params }) {
  const Blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.BlogSlug);
  if (!Blog) {
    notFound()
  }
  let imageList = [siteMetadata.socialBanner];
  if (Blog.image) {
    imageList = typeof Blog.image.filePath === 'string' ?
      [siteMetadata.siteUrl + Blog.image.filePath.replace("../public", "")] : Blog.image
  }
  const publishedDate = new Date(Blog.publishedAt).toISOString();
  const modifiedDate = new Date(Blog.updatedAt || publishedDate).toISOString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": Blog.title,
    "description": Blog.description,
    "image": imageList,
    "datePublished": publishedDate,
    "dateModified": modifiedDate,
    "author": [{
      "@type": "Person",
      "name": Blog?.author ? [Blog.author] : siteMetadata.author,
      "url": siteMetadata.github
    }]
  }


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article >
        <div className=" mb-8 blog-page w-full h-[75vh] relative scroll-smooth">
          <div className="w-full flex flex-col justify-center items-center top-1/2 left-1/2 absolute
         -translate-x-1/2  -translate-y-1/2 z-10
        ">
            <Tags name={Blog.tags[0]} link={`/catagories/${slug(Blog.tags[0])}`} className='px-6 py-2 text-sm' />
            <span className="inline-block mt-6 text-light xl sm:2xl lg:text-4xl text-center  font-semibold capitalize leading-normal relative w-5/6">{Blog.title}</span>
          </div>

          <div className="h-full w-full top-0 left-0 right-0 bottom-0 absolute translate-x-[1/2] bg-black/40 dark:bg-black/30"></div>
          <Image src={Blog.image.filePath.replace("../public", "")}
            blurDataURL={Blog.image.blurhashDataUrl}
            placeholder="blur"
            className=" w-full h-full object-center object-cover  z-10"
            width={Blog.image.width}
            height={Blog.image.height}
            alt={Blog.title}
          />
        </div>


        <BlogDetails Blog={Blog} slug={params.slug} />
        <div className="grid grid-cols-12 mt-12 gap-6 px-4  dark:text-light">
          <div className="col-span-12 sm:col-span-3 sm:sticky top-1">
            <details className="border border-solid dark:text-light dark:border-light border-dark text-dark  rounded-lg p-3 sticky top-6  max-h-[80vh]
             overflow-hidden overflow-y-auto" open>
              <summary className="text-lg font-semibold capitalize  cursor-pointer">Table of content</summary>
              <ul className="mt-4 font-in text-base ">
                {
                  Blog.toc.map((ele) => {
                    return <li key={`#${ele.slug}`} className="p-1">
                      <a href={`#${ele.slug}`}
                        data-level={ele.level}
                        className="data-[level=two]:pl-0 data-[level=two]:pt-2
                          data-[level=two]:border-t border-solid border-dark/40
                          
                          data-[level=three]:pl-4
                          flex items-center  justify-start
                          "
                      >
                        {
                          ele.level === 'three' ? <span className="flex h-1 w-1 mr-2 rounded-full bg-dark ">&nbsp;</span> : null
                        }
                        <span>{ele.text}</span>
                      </a>
                    </li>
                  })
                }
              </ul>
            </details>
          </div>

          <span className=" col-span-12 sm:col-span-9"><RenderMdx Blog={Blog} /></span>
        </div>
      </article>
    </>
  )
}