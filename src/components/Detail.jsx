const Detail = ({ exerciseDetail }) => {
  const { gifUrl, name, target } = exerciseDetail;

  return (
    <>
      <img src={gifUrl} alt={name} />
      <div className="ex-name">{name}</div>
      <div className="ex-text">
        Exercises keep you strong! {name} {""} is one of the best <br />{" "}
        exercises to target your {target}. It will help you to improve your mood
        and gain energy.
      </div>
    </>
  );
};

export default Detail;
