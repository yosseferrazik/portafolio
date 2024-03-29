import "./Navbar.css";
import { RiHome2Line, RiUser5Line, RiFileUserLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav>
      <div className="right">
        {" "}
        <ul>
          <li>
            <RiHome2Line />
            &nbsp;<span>Inicio</span>
          </li>
          <li>
            <RiUser5Line />
            &nbsp;<span>Sobre mi</span>
          </li>{" "}
          <li>
            <RiFileUserLine />
            &nbsp;<span>Habilidades</span>
          </li>{" "}
        </ul>
      </div>
      <div className="left">
        <ul>
          <li>Hola</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
