import { FaGlobeAmericas } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <h1>
        <FaGlobeAmericas className="globe-icon" />
        <span>my travel journal.</span>
      </h1>
    </header>
  );
};

export default Header;
