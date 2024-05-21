import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-10">
      <Link to={"/"}>
        <img
          className="max-w-[150px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        />
      </Link>
    </header>
  );
};

export default Header;
