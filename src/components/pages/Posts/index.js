import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        console.log("effect called");
        let url = `${process.env.REACT_APP_API_ROOT}/posts`;
        axios.get(url).then( (response) => {
            setPosts(response.data);
        });
    },[]);

    console.log('posts', posts);
    return (
       <div className="p-14 w-4/5 flex justify-between align-middle flex-wrap">
        <h1>Posts</h1>
        {
        Object.keys(posts).length ? posts.map((post)=>{
            console.log(post.title.rendered);
            return (
                <div className='border p-3 w-[300px] shadow-lg mb-5 rounded-lg' key={post.id}>
                    <Link to={`/posts/${post.id}`} >                    
                        <img src={post.featured_src} />
                    </Link>
                    <Link to={`/posts/${post.id}`} >
                        <h2 className='text-lg font-bold'>{post.title.rendered}</h2>
                    </Link>
                    
                    <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                </div>
                
            )
        }) : 'Loading...'
        }
       </div>
    )
}

export default Posts;