import { useAuth } from "../context/authContext";

export const Home = () => {
  const { user, logout, loading } = useAuth();

  const handleLogOut = async () => {
    await logout();
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <div>Welcome {user.displayName || user.email}</div>
      <button onClick={handleLogOut}>Logout</button>
    </>
  );
};
