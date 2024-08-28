"use client"


import Link from "next/link"
import Logo from "./Logo";
import { GithubIcon, LinkedinIcon, SunIcon, TwitterIcon } from "./icons";
import siteMetadata from "../../utils/SiteMetaData";
import { useThemeSwitcher } from "../../hooks/useThemeSwitcher";
import { useEffect, useState } from "react";


const Header = () => {

  const [mode, setMode] = useThemeSwitcher();
  const [click, setClick] = useState(false);


  return (
    <div className="w-100 flex py-3 sm:py-4 px-4  sm:px-8 justify-between align-middle">
      <Logo />
      <button className="inline-block z-100 sm:hidden" onClick={() => setClick(!click)}>
        <div className="w-6  cursor-pointer transition-all ease duration-300">
          <div className=" relative  bg-slate-300">
            <span className=" h-0.5 w-full absolute top-0 right-0 inline-block  bg-dark  dark:bg-light rounded transition-all ease duration-300"
              style={{ transform: click ? 'rotate(-45deg) translateY(0)' : 'rotate(0) translateY(6px)' }}
            >&nbsp;</span>
            <span
              style={{ opacity: click ? 0 : 1 }}
              className=" h-0.5 w-full absolute top-0 right-0 inline-block bg-dark dark:bg-light rounded transition-all ease duration-300">&nbsp;</span>
            <span
              style={{ transform: click ? 'rotate(45deg) translateY(0)' : 'rotate(0) translateY(-6px)' }}
              className=" h-0.5 w-full absolute top-0 right-0  inline-block bg-dark  dark:bg-light rounded transition-all ease duration-300">&nbsp;</span>
          </div>
        </div>
      </button>
      {/* --------navbar for mobile---------- */}
      <nav className="z-50 w-max py-2  px-6 sm:px-8 border border-solid rounded-full border-dark flex sm:hidden items-center gap-x-4
      right-1/2 translate-x-1/2 fixed top-5 font-medium capitalize bg-light/80 backdrop:blur-sm  transition-all ease-in-out duration-300"
      style={{top:click?'1rem':'-5rem'}}
      >
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/contact'}>Contact</Link>
        <button className="cursor-pointer " onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}><SunIcon /></button>
      </nav>
      {/* ---------------mobile navbar end----------- */}

      <nav className="z-50 w-max py-3  px-6 md:px-8 border border-solid rounded-full border-dark hidden sm:flex items-center gap-x-4
      right-1/2 translate-x-1/2 fixed top-5 font-medium capitalize bg-light/80 backdrop:blur-md">
        <Link href={'/'}>Home</Link>
        <Link href={'/catagories/all'}>Catagories</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/contact'}>Contact</Link>
        <button className="cursor-pointer " onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}><SunIcon /></button>
      </nav>
      <div className="h-auto hidden sm:flex items-center ">
        <Link href={siteMetadata.linkedin} className=" w-6 h-6 inline-block mr-4 hover:scale-125 transition-all ease-linear"><LinkedinIcon /></Link>
        <Link href={siteMetadata.github} className=" w-6 h-6 inline-block mr-4 hover:scale-125 transition-all ease-linear"><GithubIcon className={'dark:fill-white'} /></Link>
      </div>
    </div >
  )
}

export default Header