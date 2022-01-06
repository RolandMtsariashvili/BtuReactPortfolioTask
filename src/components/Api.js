import { useFetch } from "../hooks/useFetch";
import NavBar from "./Navbar";

const Api = () => {
  const res = useFetch("https://jsonplaceholder.typicode.com/posts", {});
  console.log(res);
  if (!res.response) {
    return <div>Loading...</div>;
  }
  const description = res.response.map((el) => el.body);
  const title = res.response.map((el) => el.title);

  return (
    <div>
      <NavBar />
      <h4>{description}</h4>
      <p>{title}</p>
    </div>
  );
};

export default Api;
