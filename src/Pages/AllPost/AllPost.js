import React, {useState, useEffect} from 'react';
import { BsPersonCircle } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { BsFillChatLeftFill } from "react-icons/bs";
import { BsShareFill } from "react-icons/bs";
import './AllPost.css';

const AllPost = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/createpost')
            .then(res => res.json())
            .then(data => setPost(data));
    }, []);

    return (
        <div>
            {
                post.map((post, index) => (
                    <div className='post-area'>
                        <div className='post-header'>
                            <div>
                            <h1  className="post-user"> <BsPersonCircle/> user</h1>
                            </div>
                            <div>
                                <button className='post-Close-btn'><BsThreeDots/></button>
                            </div>
                        </div>
                        <div className='post-text'>
                            <h5>{post.description}</h5>
                        </div>
                        <div className='post-like-comment-share-area'>
                            <div>
                                <BsFillHandThumbsUpFill/>
                                <span>Like</span>
                            </div>
                            <div>
                                <BsFillChatLeftFill/>
                            <span>Comment</span>
                            </div>
                            <div>
                                <BsShareFill/>
                            <span>Share</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AllPost;