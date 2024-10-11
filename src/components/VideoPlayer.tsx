"use client";
import { useState } from "react";
import { Videos } from "../../type";
import YouTube, { YouTubeEvent, YouTubeProps } from "react-youtube"; // Import YouTubeEvent for correct typing
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Loading from "@/app/loading";

const VideoPlayer = ({ videos }: Videos) => {
  const [loadingStates, setLoadingStates] = useState<boolean[]>(new Array(videos.length).fill(true)); // Track loading state for each video

  // Add correct typing for the event using YouTubeEvent
  const onPlayerReady: YouTubeProps['onReady'] = (event: YouTubeEvent) => {
    event.target.pauseVideo(); // Correctly typed event
    // Find the index of the video that is ready
    const videoIndex = videos.findIndex((v) => v.key === event.target.getVideoData().video_id);
    if (videoIndex !== -1) {
      const newLoadingStates = [...loadingStates];
      newLoadingStates[videoIndex] = false;
      setLoadingStates(newLoadingStates);
    }
  };

  const opts = {
    height: "300px",
    width: "100%",
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-5">Official videos from Youtube:</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
        {videos.map((video, index) => (
          <motion.div
            key={video?.id}
            className="border border-gray-600 rounded-md w-full overflow-hidden relative"
            initial={{ opacity: 0, translateY: 20 }} // Initial state for animation
            animate={{ opacity: 1, translateY: 0 }} // End state for animation
            transition={{ duration: 0.5, delay: index * 0.1 }} // Transition with delay for staggered effect
          >
            <p className="text-sm font-medium px-6 py-3">
              Type: {video?.type} - {video?.official ? "Official" : "General"}
            </p>

            {/* Show loading message while the video is loading */}
            {loadingStates[index] && (
              <div className="absolute inset-0  bg-opacity-75 flex justify-center items-center">
               <Loading/>
              </div>
            )}

            {/* YouTube component with onReady event */}
            <YouTube
              videoId={video?.key}
              onReady={onPlayerReady} // Properly typed onReady function
              opts={opts}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
