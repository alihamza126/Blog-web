import React from 'react'

const Skills = () => {
    const SkillList = [
        "next.js",
        "tailwind css",
        "figma",
        "javaScript",
        "web design",
        "Gatsby.js",
        "strapi",
        "firebase",
        "generative AI",
        "wireframing",
        "SEO",
        "framer motion",
        "sanity",
    ];
    return (
        <section className='p-2 sm:p-20 flex flex-col w-full border-b-2 border-dark border-solid text-dark'>
            <span className=' font-semibold text-4xl text-accent dark:text-accentDark'>
                I'm comfortable in...
            </span>
            <ul className=' mt-8 flex gap-y-4 flex-wrap justify-center sm:justify-start'>
                {
                    SkillList.map((e, index) => (
                        <li key={index} 
                        className='font-normal sm:font-semibold capitalize text-lg sm:text-2xl py-2 sm:py-5 px-4 sm:px-12 border-2  border-dark dark:text-light dark:border-light  border-solid rounded mr-6 hover:scale-105  transition-all duration-200 ease-in cursor-pointer'
                        >{e}</li>
                    ))
                }
            </ul>

        </section>
    )
}

export default Skills