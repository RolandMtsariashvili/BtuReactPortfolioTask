import NavBar from "./Navbar";

const About = () => {
  return (
    <>
      <NavBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          fontSize: "24px",
        }}>
        <h2>About me</h2>
        <p
          style={{
            width: "700px",
            margin: "0 auto",
            textAlign: "left",
            fontSize: "20px",
          }}>
          I am a third year bachelor of Business And Technologies University Of
          Tbilisi, Information technology faculty. In university i was able to
          learn the basics of programming: algorithmic thinking, problem solving
          skills, Networking, Linux Administration, Basic principles of working
          with databases (Oracle SQL), along with more specific knowledge, such
          as Python Web Frameworks (Flask, Django), basics of PHP back-end
          development with Laravel and main concepts of front-end development
          and Javascript as well. By the beginning of 2021 I completed EPAM
          Front-End program, where I was picking up all the necessary skills
          needed for Front-End developement, such as advanced HTML - CSS, core
          Javascript and React/Redux, which quickly became my favorite
          technology to use.
        </p>
      </div>
    </>
  );
};

export default About;
