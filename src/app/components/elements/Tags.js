import Link from "next/link"
import { cx } from "../../utils"

const Tags = ({ link = "#", name, ...props }) => {
    return (
        <Link href={link}
            className={cx('inline-block bg-dark py-2 sm:py-3 px-6 sm:px-10 rounded-full text-light border-2 border-solid border-light hover:scale-105 transition-all ease-linear duration-150 capitalize ', props.className)}>
            {name}
        </Link>
    )
}

export default Tags