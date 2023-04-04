import { useEffect } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    axios.get("http://127.0.0.1:8080/users").then((data) => {
      console.log(data);
    });
  });
  return <div></div>;
};

export default App;
