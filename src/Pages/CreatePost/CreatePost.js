import React from 'react';
import { BsPersonCircle } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { BsFileImage } from "react-icons/bs";
import { BsCameraVideoFill } from "react-icons/bs";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import './CreatePost.css';
import axios from 'axios';

const CreatePost = ({ setOpenModal }) => {
    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = data =>{
        console.log(data);
        axios.post('http://localhost:5000/createpost', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('post successfully');
                reset();
            }
        })
    } 

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                    <div className="titleCloseBtn">
                        <button onClick={() => {setOpenModal(false);}}>
                            x
                        </button>
                    </div>
                    <div className="title">
                        <span>Create post</span>
                    </div>
                    <div className="body">
                        <div>
                            
                            <h1  className="user"> <BsPersonCircle/> user</h1>
                            
                        </div>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)} className='createPost-area'>
                                <textarea {...register("description")} placeholder="Description" className='description-text'/>
                                <div className='add-to-your-post'>
                                    <div>
                                        <h6>Add to your post</h6>
                                    </div>
                                    <div className=''>
                                        <BsCameraVideoFill className='create-post-Live-vedio-icon'/>
                                        <BsFileImage  className='create-post-Photovideo-icon'/>
                                        <BsFillEmojiSmileFill className='create-post-FeelingActivity-icon'/>
                                    </div>
                                </div>
                                <input type="submit" className='description-submit-btn'/>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default CreatePost;