import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContextProvider";

const ProtectedRoute = ({ children }) => {
  let { user } = useUserContext();
   user = localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')) : null
  const navigate = useNavigate();

  if (!user) {
    return navigate("/");
  } 

 return children;
};

export default ProtectedRoute;
