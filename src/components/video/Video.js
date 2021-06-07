import React from 'react';
import './_video.scss';

import {AiFillEye} from 'react-icons/ai';

const Video = () => {
    return (
       <div className="video">
           <div className="video__top">
               <img src="https://i.ytimg.com/vi/UPGoIX_L9Ds/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBLcpHL0_b0_YX3ifohLdUuWRvHMA" alt='' />
               <span>05:43</span>

           </div>
           <div className="video__title">
               Create App In 5 Minutes #made by jeet
           </div>
           <div className="video__details">
               <span>
                    <AiFillEye /> 5m views • 
               </span>
               <span> 5 days ago</span>
           </div>
           <div className="video__channel">
               <img src="https://yt3.ggpht.com/ytc/AAUvwngxmhjAZUHXCguja3i2uRLhPQP8j2Vdp8bCb9dEa_Q=s88-c-k-c0x00ffffff-no-rj" alt="" />
               <p>Jeet Patel</p>
           </div>


       </div>
    )
}

export default Video
