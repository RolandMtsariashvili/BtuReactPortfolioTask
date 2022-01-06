import NavBar from "./Navbar";

const Contact = () => {
  return (
    <>
      <NavBar />
      <br />
      <ul style={{ display: "flex", justifyContent: "center" }}>
        <li style={{ listStyle: "none", paddingRight: "50px" }}>
          <a href='https://www.facebook.com/roland.mcariashvili'>Facebook</a>
        </li>
        <li style={{ listStyle: "none", paddingRight: "50px" }}>
          <a href='https://www.linkedin.com/in/rolandi-mtsariashvili/'>
            Linkedin
          </a>
        </li>
        <li style={{ listStyle: "none", paddingRight: "50px" }}>
          <a href='tel:555429290'>Phone</a>
        </li>
      </ul>
    </>
  );
};

export default Contact;
