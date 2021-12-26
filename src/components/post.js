import React, { useEffect, useState} from "react";
import { Link } from "@reach/router";

const Post = ({id}) => {
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const resp = await fetch(
                `my-app.celestial-moor.workers.dev/posts/${id}`
            );
            const postResp = await resp.json();
            // const postContent = JSON.parse(postResp)
            if (typeof postResp !== "object") {
                const parsedResp = JSON.parse(postResp)
                setPost(parsedResp)
            } else {
                setPost(postResp);
            }         
        };

        getPost();
    }, [id]);

    if (post === undefined) {
        return <div />;
    }

    return (
        <div>
            <h1>I did see the page!!!</h1>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            {/* <p>
                <em>Published {new Date(post.published_at).toLocaleString()}</em>
            </p> */}
            <p>
                <Link to="/">Go back</Link>
            </p>
        </div>
    );
};

export default Post;