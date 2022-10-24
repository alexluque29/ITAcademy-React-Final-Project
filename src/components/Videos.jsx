
const Videos = ({exerciseVideos, name}) => {

  return (
    <>
    <div>{name} Videos</div>
    <div>
    {exerciseVideos?.slice(0, 3).map((item, index) => (
      <a
      key={index}
      className="exVideo"
      href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
      target="_blank"
      rel='noreferrer'      
      >
        <img src={item.video.thumbnails[0].url} alt="video"/>
      </a>

    ))}  
    </div>    
    </>
  )
}

export default Videos