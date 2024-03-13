import { useState, useEffect } from "react";
import "./Header.css";
import {
  RiAsterisk,
  RiHome2Line,
  RiUser5Line,
  RiFileUserLine,
  RiGithubLine,
  RiDiscLine,
  RiDiscordLine,
} from "react-icons/ri";
const Header = () => {
  const [and, setAnd] = useState(``);

  useEffect(() => {
    setInterval(() => {
      setAnd(`${Math.random()}`);
    }, 2000);
  }, [setAnd]);

  return (
    <header>
      <div className="header-right">
        <h1>
          Mi nombre es <br />
          <span>
            Yossef Errazik{" "}
            <img
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              width="10%"
            />
          </span>
        </h1>
        <div id="header-text">
          <p>Y voy a dejar mi huella en internet</p>
        </div>
        <button
          onClick={() =>
            window.open("https://github.com/yosseferrazik", "_blank")?.focus()
          }
        >
          <RiGithubLine />
        </button>{" "}
        <button
          onClick={() =>
            window.open(
              "https://discordapp.com/users/898444313049042974",
              "_blank"
            )
          }
        >
          <RiDiscordLine />
        </button>{" "}
        <button>
          <RiGithubLine />
        </button>
      </div>
      <div className="header-left">
        <img src="https://i.imgur.com/3osgk3e.png" alt="test" />
      </div>
    </header>
  );
};

export default Header;
