import { useState, useEffect } from "react"

export default function CreatePostAndFilterBar() {
    const [sortClick, setSortClick] = useState("");
    const [filterClick, setFilterClick] = useState("");



    return <>
        <div className="w-[75%] flex flex-row items-center mt-2 pt-4 space-x-[2rem] absolute translate-y-[45%]">
            <div className="basis-1/4 h-[5rem] bg-white p-4">
                <h2>Sort By:</h2>
                <div>
                    
                </div>
                {/* <button onClick={() => setIsOpen(!isOpen)} className={`p-4 ${textColor}`}>
                    Services
                    {
                        isOpen && <div style={{ backgroundColor: `rgba(238, 144, 51, ${calculatedOpacity})` }} className={`${textColor} absolute top-[4rem]`}>
                            {
                                <ul className={`m-2 w-20`}>
                                    <li className="mb-1"><a href="/maps">Data Maps</a></li>
                                    <li><NavLink className='mb-1' to='/posts'>Posts</NavLink></li>
                                    <li className="mb-1"><a href="/About-us">About Us</a></li>
                                    <li><NavLink className='mb-1' to='/posts/1'>Post - 1</NavLink></li>
                                </ul>
                            }
                        </div>
                    }
                </button> */}
            </div>
            <div className="basis-2/4 h-[5rem] bg-white"></div>
            <div className="basis-1/4 h-[5rem] bg-white p-4">
                <h2>Filter By:</h2>
            </div>
        </div>
    </>
}