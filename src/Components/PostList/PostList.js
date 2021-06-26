import React from 'react';
import './PostList.css'
import Post from '../Post/Post';

function PostList({ posts }) {
    return (
        <div className="container">
                <div className="row">
                {posts.map(post => (
                    <Post post={post} key={post.id}/>
                ))}
            </div>
        </div>
    )
}

export default PostList;
