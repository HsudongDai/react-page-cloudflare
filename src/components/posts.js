import React, {useEffect, useState} from "react";
import { Link } from "@reach/router";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const resp = await fetch(
                `bold-scene-1ac9.celestial-moor.workers.dev/api/posts`
            );
            const postsResp = await resp.json();
            setPosts(postsResp);
        };

        getPosts();
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>
                        <Link to={`/posts/${post.id}`}></Link>
                    </h2>
                </div>
            ))}
        </div>
    );
};

export default Posts;