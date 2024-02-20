import { useEffect, useState } from "react";
import { getAllPosts } from "../adapters/post-adapter";
import { SimpleGrid, Card, CardHeader, Heading, CardBody, Text, CardFooter, Button } from "@chakra-ui/react";
import CreatePostAndFilterBar from "../components/CreatePostAndFilterBar";
import CommunityPostsCard from "../components/CommunityPostsCard";

export default function CommunityPosts() {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [sortClick, setSortClick] = useState("latest");
    const [filterClick, setFilterClick] = useState("");
    const [boroughs, setBoroughs] = useState([]);
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    useEffect(() => {
        const getPosts = async () => {
            const allPosts = await getAllPosts();
            let sortedPosts;
            if (sortClick === "latest") {
                sortedPosts = allPosts.sort((a, b) => new Date(b.date_created) - new Date(a.date_created));
            } else if (sortClick === "oldest") {
                sortedPosts = allPosts.sort((a, b) => new Date(a.date_created) - new Date(b.date_created));
            }
            setPosts(sortedPosts);
            setFilteredPosts(sortedPosts);
        };

        getPosts();
    }, [sortClick]);

    useEffect(() => {
        let updatedPosts = [...posts];

        if (filterClick && startTime && endTime) {
            updatedPosts = updatedPosts.filter(post => {
                return post.start_time >= startTime && post.end_time <= endTime;
            });
        }

        console.log(updatedPosts)
        setFilteredPosts(updatedPosts);
    }, [posts, filterClick, startTime, endTime]);


    return (
        <>
            <div className="w-full bg-[#D9D9D9]">
                <CreatePostAndFilterBar
                    setSortClick={setSortClick}
                    setFilterClick={setFilterClick}
                />
                <CommunityPostsCard
                    posts={filteredPosts}
                    setPosts={setPosts}
                    filterClick={filterClick}
                    filteredPosts={filteredPosts}
                    setFilteredPosts={setFilteredPosts}
                    setStartTime={setStartTime}
                    setEndTime={setEndTime}
                />
            </div>
        </>
    );
}
