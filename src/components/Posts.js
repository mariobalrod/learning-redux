import React, {useState, useEffect} from 'react';
import { postsUrl as getPostsUri } from '../api/data';

//Components
import CardPost from './CardPost';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts(getPostsUri)
    })

    const fetchPosts = async (getPostsUri) => {
        fetch(getPostsUri)
            .then(res => res.json())
            .then(json => setPosts(json))
            .catch(err => console.log(err));
    }

    return ( 
        <div className="principal">
            <h1 style={{textAlign: "center", color: "white", fontSize: 45}}>Posts</h1>
            <div className="secondary">
                {posts.map((post) => <CardPost key={post.id} title={post.title} body={post.body} />)}  
            </div>
        </div>
    );
}

export default Posts;