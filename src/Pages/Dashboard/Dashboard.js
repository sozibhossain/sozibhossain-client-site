import React, {useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsPersonCircle } from "react-icons/bs";
import { BsFileImage } from "react-icons/bs";
import { BsCameraVideoFill } from "react-icons/bs";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import AllPost from '../AllPost/AllPost';
import CreatePost from '../CreatePost/CreatePost';
import './Dashboard.css';

const Dashboard = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <Container>
            <Row>
                <Col sm={8}>
                    <div className='create-post-area'>
                            <div>
                                <BsPersonCircle className='user-icon'/>
                                <button className='create-post-btn' onClick={() => { setModalOpen(true); }}>Create post</button>
                            </div>
                            <div className='create-post-LPF'>
                                <div><button><BsCameraVideoFill className='create-post-Live-vedio-icon'/> Live vedio</button>
                                </div>
                                <div><button><BsFileImage  className='create-post-Photovideo-icon'/> Photo/video</button></div>
                                <div><button><BsFillEmojiSmileFill className='create-post-FeelingActivity-icon'/> Feeling/Activity</button>
                                </div>
                                
                            </div>

                            { modalOpen && <CreatePost setOpenModal={setModalOpen}/>}
                    </div>
                    <div>
                        <AllPost></AllPost>
                    </div>
                </Col>
                <Col sm={4}>Sponsored</Col>
            </Row>
            
        </Container>
    );
};

export default Dashboard;