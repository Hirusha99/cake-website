import "./css/Fotter.css";
import { FaYoutube, FaFacebookF, FaTiktok } from "react-icons/fa";

const Fotter = () => {
  return (
   
      <footer className="bg-dark text-light text-center py-5 footer-reset">
        <div className="container">
          <p>Follow us on:</p>
          <div className="botton">
            <FaYoutube size="40px" />
            <FaFacebookF size="30px" />
            <FaTiktok size="30px" />
          </div>

          <p>Home made cake - All rights reserved.</p>
        </div>
      </footer>
    
  );
};

export default Fotter;
