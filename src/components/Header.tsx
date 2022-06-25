import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo";

export const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header onClick={() => navigate("/")} className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600 cursor-pointer">
      <Logo />
    </header>
  );
};
