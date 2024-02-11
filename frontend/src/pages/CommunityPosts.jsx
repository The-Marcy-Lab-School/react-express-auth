import { useEffect, useState } from "react";
import { getAllPosts } from "../adapters/post-adapter";
import Post from "../components/Post";
import CreatePostAndFilterBar from "../components/CreatePostAndFilterBar";
export default function CommunityPosts() {
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {

    // })


    return <>
        <div className="h-screen w-full bg-[#D9D9D9]">
            <div className={`h-[15rem] w-full bg-community z-0 bg-cover bg-start flex align-middle content-center justify-center items-end overflow-visible`}>
                <CreatePostAndFilterBar />
            </div>
            {/* <div className='h-screen w-full bg-[#1C1E1F]'></div> */}
            {/* <ul>
                {
                    posts.map((post) => <li key={post.id}><Post post={post} /></li>)
                }
            </ul> */}
        </div>
    </>;
}