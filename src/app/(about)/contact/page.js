import Link from "next/link"
import ContactForm from "../../components/Contact/ContactForm"
import LootieAnimation from "../../components/Contact/LootieAnimation"
import siteMetadata from "../../utils/SiteMetaData"



export const metadata = {
    title: "Contact me",
    description: `Contact me through this form and email me at ${siteMetadata.email}`
}



const page = () => {
    return (
        <section className=" flex flex-col sm:flex-row h-auto sm:h-[75vh] border-b-2 border-solid  dark:border-light border-dark items-start justify-center text-dark">
            <div className=" inline-block w-full sm:w-2/5 sm:h-full h-2/5 border-r-2 border-solid dark:border-light border-dark"><LootieAnimation /> </div>
            <div className="w-full sm:w-3/5 flex flex-col  items-start h-full justify-center px-6 sm:px-10 md:px-16 pb-8">
                <h2 className="font-bold  capitalize text-2xl dark:text-accentDark sm:text-3xl md:text-4xl">Let's Connect!</h2>
                <ContactForm />
            </div>
        </section>
    )
}

export default page