import NavBar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          fontSize: "26px",
        }}>
        <h2>Hello, I'm Roland</h2>
        <span>Software Engineer at Epam systems</span>
        <br />
        <span>
          Reach me out on <Link to='/contact'>social media</Link>
        </span>
      </div>
    </>
  );
};

export default Home;
