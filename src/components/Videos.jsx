
import "../styles/videos.css";

const Videos = ({exerciseVideos, name}) => {

  return (
    <>
    <div className="exvideo">
    {exerciseVideos?.slice(0, 1).map((item, index) => (
      <a
      key={index}
      className="video"
      href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
      target="_blank"
      rel='noreferrer'      
      >
        <img src={item.video.thumbnails[0].url} alt="video" className="videoYT"/>
      </a>
    ))}  
    </div>    
    </>
  )
}

export default Videos