import { useState, useEffect } from "react"
import CreatePostForm from "./CreatePostForm";
import { Select } from "@chakra-ui/react";

export default function CreatePostAndFilterBar({ posts, setPosts, setSortClick, setFilterClick }) {

    const handleSortClick = (event) => {
        setSortClick(event.target.value);
    }

    const handleFilterClick = (event) => {
        setFilterClick(event.target.value);
    }


    return <>
        <div className={`h-[15rem] w-full bg-community z-0 bg-cover bg-start flex align-middle content-center justify-center items-end overflow-visible`}>
            <div className="w-[75%] flex flex-row items-center mt-2 pt-4 space-x-[2rem] absolute translate-y-[45%]">
                <div className="basis-1/4 h-[5rem] bg-white p-4">
                    <Select placeholder="Sort By:" onChange={handleSortClick}>
                        <option value="latest">Latest</option>
                        <option value="oldest">Oldest</option>
                    </Select>
                </div>
                <div className="basis-2/4 h-[5rem] bg-white">
                    <CreatePostForm posts={posts} setPosts={setPosts} />
                </div>
                <div className="basis-1/4 h-[5rem] bg-white p-4">
                    <Select placeholder="Filter By:" onChange={handleFilterClick}>
                        <option value="location">Location</option>
                        <option value="time">Start/End Time</option>
                        <option value="tags">Tags</option>
                    </Select>
                </div>
            </div>

        </div>
    </>
}