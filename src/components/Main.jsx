import "../styles/main.css";

const Main = () => {
  return (
    <div className=" main flex flex-col w-full lg:flex-row">
      <div className="divider lg:divider-horizontal">OR</div>

      <div className="right grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"></div>
    </div>
  );
};

export default Main;
