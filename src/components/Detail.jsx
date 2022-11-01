import Navbar from '../components/Navbar';
import "../styles/detail.css";


const Detail = ({ exerciseDetail }) => {
  const { gifUrl, name, target } = exerciseDetail;

  return (
    <>
    <Navbar />
    <div className="details">
      <div className="exerdetail">{name} detail</div> 
      <img src={gifUrl} alt={name} className="imageDetail"/>
      <div className="ex-text">
        Exercises keep you strong! <span className="capi">{name}</span> {""} is one of the best <br />{" "}
        exercises to target your <span className="capi">{target}</span>. It will help you to improve your mood
        and gain energy.        
      </div>
      <div className="exerdetail">YouTube Videos</div> 
    </div>
    </>
  );
};

export default Detail;
