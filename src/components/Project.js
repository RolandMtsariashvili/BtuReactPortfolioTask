import NavBar from "./Navbar";

const Project = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}>
        <br />
        <div>
          <h2>My Recent Work</h2>
          <span
            style={{
              fontSize: "24px",
            }}>
            Want to see more?
          </span>
          <a href='https://github.com/RolandMtsariashvili'>Github</a>
          <ul style={{ display: "flex", justifyContent: "center" }}>
            <li style={{ listStyle: "none", paddingRight: "50px" }}>
              <a href='https://github.com/RolandMtsariashvili/mern-ecommerce'>
                Mern ecommerce
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
