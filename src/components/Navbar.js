import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul style={{ display: "flex", justifyContent: "center" }}>
        <li style={{ listStyle: "none", paddingRight: "50px" }}>
          <Link to='/'>Home</Link>
        </li>
        <li style={{ listStyle: "none", paddingRight: "50px" }}>
          <Link to='/about'>About</Link>
        </li>
        <li style={{ listStyle: "none", paddingRight: "50px" }}>
          <Link to='/contact'>Contact</Link>
        </li>
        <li style={{ listStyle: "none", paddingRight: "50px" }}>
          <Link to='/project'>Project</Link>
        </li>
        <li style={{ listStyle: "none", paddingRight: "50px" }}>
          <Link to='/api'>API fetching</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
