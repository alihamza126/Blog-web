import Link from "next/link"
import siteMetadata from "../../utils/SiteMetaData"
import { LogoIcon } from "./icons"

const Logo = () => {
    return (
        <Link href={'/'} className="flex items-center font-bold text-dark font-mr">
            <div className=" dark:border-light w-10 md:w-auto overflow-hidden
            mr-2 md:mr-4
            ">
                {/* <span>{logoSvg}</span> */}
                <LogoIcon className={'h-12 sm:h-14'}/>
            </div>
            <span className=" dark:text-lime-50 text-4xl text-emerald-600 font-semibold">{siteMetadata.siteName}</span>
        </Link>
    )
}

export default Logo