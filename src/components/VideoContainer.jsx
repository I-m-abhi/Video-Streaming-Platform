import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { videoResult } from "../utils/searchSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.search.videos);
  const searchQuery = useSelector((store) => store.search.searchQuery);

  useEffect(() => {
    if (searchQuery.length === 0) {
      fetchVideos();
    } else if (videos.length === 0) {
      fetchVideos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery.length === 0]);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    dispatch(videoResult(json.items));
  }

  return (
    <div className="flex flex-wrap">
      {videos && videos[0] && <AdVideoCard info={videos[0]} />}
      {videos && videos.map((video) => (
        video.id.videoId ? (
          <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
            <VideoCard info={video} />
          </Link>
        ) : (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        )

      ))}
    </div>
  )
}

export default VideoContainer;


