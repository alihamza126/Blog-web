import Insight from "../components/insight/Insight"

const Aboutlayout = ({ children }) => {
    return (
        <div className="w-full flex flex-col justify-between items-start">
            <div className=" w-full"><Insight /></div>
            {children}
        </div>
    )
}

export default Aboutlayout