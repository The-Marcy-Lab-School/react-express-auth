import { useState, useEffect } from "react"
import CreatePostForm from "./CreatePostForm";

export default function CreatePostAndFilterBar({ posts, setPosts }) {
    const [sortClick, setSortClick] = useState("");
    const [filterClick, setFilterClick] = useState("");



    return <>
        <div className="w-[75%] flex flex-row items-center mt-2 pt-4 space-x-[2rem] absolute translate-y-[45%]">
            <div className="basis-1/4 h-[5rem] bg-white p-4">
                <h2>Sort By:</h2>
            </div>
            <div className="basis-2/4 h-[5rem] bg-white"><CreatePostForm posts={posts} setPosts={setPosts} /></div>
            <div className="basis-1/4 h-[5rem] bg-white p-4">
                <h2>Filter By:</h2>
            </div>
        </div>
    </>
}