import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Single = () => {

    const { id } = useParams();
    const [post,setPost] = useState({});

    useEffect( ()=>{
        let url = `${process.env.REACT_APP_API_ROOT}/posts/${id}`;
        axios.get(url).then( (res) => {
            setPost(res.data);
            console.log(post);
        }).catch(
            err => {
                console.log('err', err);
            }
        )
    }, []);
    return(
        <div>
           
            { Object.keys(post).length ? (
                <div className="p-5">
                    <div>
                        <img src={post.featured_src} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">
                            {post.title.rendered}
                        </h1>
                        <div dangerouslySetInnerHTML={{__html:post.content.rendered}}>
                            
                        </div>
                    </div>
                </div>
            ) : 'loading...'}
        </div>
    )
}

export default Single;