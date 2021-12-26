import React, { useEffect, useState} from "react";
import { Link } from "@reach/router";

const Post = ({id}) => {
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const resp = await fetch(
                `https://my-app.celestial-moor.workers.dev/posts/${id}`
            );
            const postResp = await resp.json();
            // const postContent = JSON.parse(postResp)
            if (typeof postResp !== "object") {
                const parsedResp = JSON.parse(postResp)
                setPost(parsedResp)
                console.log(parsedResp)
                console.log(typeof parsedResp)
            } else {
                setPost(postResp);
                console.log(postResp);
                console.log(typeof postResp);
            } 
        };

        getPost();
    }, [id]);

    if (post === undefined) {
        console.log("It is undefined")
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