import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostList from '../PostList/PostList';


const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '60d758b97df48aaea2e9f8d4';

const PostListContainer = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios(`${BASE_URL}/post`, { headers: { 'app-id': APP_ID } }).then(post => setPosts(post.data.data))
    }, []);



    return (
        <div>
           <PostList posts={posts}/>
        </div>
    );
};

export default PostListContainer;