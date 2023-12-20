import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload(); 
    navigate('/')
  };

  return (
    <button onClick={handleLogout} className="px-8 py-2 font-bold text-[#029D9D] hover:text-white bg-white border-2 border-white hover:bg-[#029D9D] rounded-md transition-all duration-200">
      Logout
    </button>
  );
};

export default LogoutButton;