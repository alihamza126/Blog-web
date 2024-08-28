import Link from 'next/link'
import React from 'react'
import { cx } from '../../utils'

const Catagory = ({ category, currentSlug, link = "#", name, ...props }) => {
  return (
    <Link href={link}
      className={cx('inline-block py-1 sm:py-2 text-sm sm:text-lg px-6 sm:px-10 rounded-full border-2 border-solid hover:scale-105 transition-all ease-linear duration-150 capitalize ', props.className,currentSlug==name?'bg-dark text-lime-50':'bg-white text-dark')}>
      #{name}
    </Link>
  )
}

export default Catagory