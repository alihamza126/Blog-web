import Image from 'next/image'
import React from 'react'
import characterImg from '@/public/character.png'
import Skills from './Skills'
import Link from 'next/link'

const About = () => {
    return (
        <>
            <section className='flex flex-col sm:flex-row h-full h-[70vh] border-b-2 dark:text-light'>
                <div className="left w-full sm:w-1/2 border-r-2 border-dark dark:border-light border-solid ">
                    <Image src={characterImg} alt='contact-character' className='h-2/5  sm:h-full w-full object-contain object-center' />
                </div>
                <div className="right w-full sm:w-1/2 flex flex-col justify-center items-start px-3 sm:px-6 lg:px-16 text-left">
                    <h1 className='text-2xl sm:text-4xl lg:text-6xl text-center  capitalize font-semibold dark:text-accentDark'>Dream Big, Work Hard, Achieve More!</h1>
                    <p className='text-sm  md:text-xl font-medium mt-6 capitalize mb-2'>
                        This Mantra Drives My Work As A Passionate Freelancer. I Blend Innovative Technology With Timeless Design For Captivating Digital Experiences. Inspired By Nature And Literature, I'm A Perpetual Learner Embracing Challenges. With Each Project, I Aim To Leave A Lasting Impact—One Pixel At A Time.
                    </p>
                </div>
            </section>
            <Skills />
            <h2 className='mt-8 font-normal sm:font-semibold text-lg sm:text-2xl selft-start px-4 sm:px-20 dark:font-light dark:text-light text-dark'>
                Have a project in mind? Reach out to me 📞 from <Link className=' underline-offset-2  !underline' href={'/contact'}>here</Link> and let's make it happen.
            </h2>
        </>
    )
}

export default About