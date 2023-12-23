import { Navigate, Outlet } from "react-router-dom";

function PrivateComponents() {
    const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        return token !== null;
    };

    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateComponents;
