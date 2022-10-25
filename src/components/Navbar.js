import { useAuth } from "../context/authContext";
import Icon from "../image/gym-near.png";
import '../styles/navbar.css';


const Navbar = () => {

  const { user, logout, loading } = useAuth();
  const handleLogOut = async () => {
    await logout();
  };
  if (loading) return <h1>Loading...</h1>;

  return (

    <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>      
    </div>
    <img src={Icon} alt="icon" className="bodyIcon w-11 h-11 ml-5" />
    <div className="btn btn-ghost normal-case text-xl text-white">Fast Fitness</div>
  </div>
  <div className="navbar-center hidden lg:flex">    
  </div>
  <div className="navbar-end">
    <div className="welcome">{user.displayName || user.email}</div>
    <button className="button-logout" onClick={handleLogOut}>Logout</button>

  </div>
</div>    
  );
};

export default Navbar;
