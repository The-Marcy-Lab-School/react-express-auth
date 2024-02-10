import { useEffect, useState } from "react";
import { getAllPosts } from "../adapters/post-adapter";
import Post from "../components/Post";

export default function CommunityPosts() {
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {

    // })


    return <>
        <div className="h-screen w-full"> 
            <div className={`h-[15rem] w-full bg-community z-0 bg-cover bg-center`}></div>
            {/* <div className='h-screen w-full bg-[#1C1E1F]'></div> */}
            {/* <ul>
                {
                    posts.map((post) => <li key={post.id}><Post post={post} /></li>)
                }
            </ul> */}
        </div>
    </>;
}