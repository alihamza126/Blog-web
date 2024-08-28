"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../Header/icons';
import Link from 'next/link';
const Footer = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <footer className='mx-2 sm:mx-16 pt-16 pb-8 dark:bg-accentDark/90 dark:text-dark  bg-dark rounded-3xl mb-2 flex flex-col items-center justify-center  mt-32 text-light'>
            <h3 className='text-xl sm:text-2xl py-4 font-normal text-center'>
                Interesting Stories | Updates | Guides
            </h3>
            <p className=" text-light/70 mb-6 text-center px-4 dark:text-dark">
                Subscribe to learn about new technology and updates. Join over 5000+ members community to stay up to date with latest news.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className='w-11/12 sm:w-auto rounded-lg bg-light dark:bg-dark py-1 sm:py-2 px-2 sm:px-4 flex flex-row  items-stretch justify-center gap-2 sm:gap-4 overflow-hidden'>
                <input className='text-dark w-full sm:w-auto focus:border-dark focus:ring-0 dark:bg-dark border-0 border-b-2' type="email" placeholder="Enter your email" {...register("email", { required: true })} />

                <input type="submit" className='bg-dark dark:bg-light/20 hover:brightness-50 p-2 rounded-lg cursor-pointer px-3 sm:px-4  hover:bg-dark/90' />
            </form>
            <div className='flex flex-col mt-6  text-center gap-2 mb-0'>
                <Link className=' underline' href={'/privacy-policy'}>Privacy Policy</Link>
                <Link className=' underline' href={'/privacy-policy'}>DCMA</Link>
            </div>

            <div className="flex items-center mt-12 gap-6">
                <a href="https://github.com/alihamza126" className=' fill-white  dark:fill-black inline-block w-6 h-6 hover:scale-125 transition-all duration-150 ease-in cursor-pointer'><GithubIcon /></a>
                <a href="http://linkedin.com" className='inline-block w-6 h-6 hover:scale-125 transition-all duration-150 ease-in cursor-pointer'><LinkedinIcon /></a>
                <a href="http://twitter.com" className='inline-block w-6 h-6 hover:scale-125 transition-all duration-150 ease-in cursor-pointer'><TwitterIcon /></a>
            </div>

            <div className="border-t pt-4 px-1 sm:px-6 info flex flex-col sm:flex-row w-full justify-between items-center gap-2 mt-6">
                <span className='text-center text-base'>&copy; 2024 AliBlog. All rights reserved.</span>

                <Link href='/sitemap.xml' className='text-center underline text-base'>
                    Sitemap.xml
                </Link>

                <p className='text-center text-xs sm:text-base'>Made with &hearts; by <a className='underline' href="#"> Ali</a> </p>
            </div>

        </footer>
    )
}

export default Footer