import Catagory from "./Catagory"

const Catagoires = ({ Catagoires, currentSlug }) => {
  return (
    <div className="px-0 sm:px-10 md:px-20 flex justify-start gap-1 items-center flex-wrap 
       border-t-2 mt-3 gap-y-2 gap-x-2 mx-10 pt-3 sm:pt-5 border-b-2 py-5 first-letter:
    ">
      {
        Catagoires.map((cat) => (
          <Catagory key={cat} name={cat} link={`${cat}`} category={cat} currentSlug={currentSlug} />

        ))
      }
    </div>
  )
}

export default Catagoires