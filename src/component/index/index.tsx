
import Navbar from "../navbar/navbar"


function Index(): JSX.Element {
    return (
        <div className="bg-zinc-900 h-screen">
            <div className="container mx-auto">
                <Navbar />
            </div>
            <div className="container mx-auto h-1/2 flex flex-col justify-center items-center">
                <div className="w-full flex flex-col w-full  w-full text-center items-center">
                    <h1 className="text-white text-7xl font-bold w-full">Fill your happiness with music</h1>
                    <p className="w-full text-white text-xl mt-6 w-full">Stream high-quality music without ads on v music. Listen anywhere anytime at your fingertips</p>
                    <a className='button bg-[#0070C0] mt-5 w-36'>Try for free</a>
                </div>
            </div>
        </div>
    )
}

export default Index