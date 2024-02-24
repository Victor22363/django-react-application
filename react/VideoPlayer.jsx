import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import './VideoPlayer.css';
import 'bootstrap/dist/css/bootstrap.css'; 

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    }
  }, [src]);

  return (
    <div>
      <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
      <video id='video' ref={videoRef} controls autoPlay></video>
      
    </div>
  );
};

export default VideoPlayer;
