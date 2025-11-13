import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setData(res.data);
        console.log(res);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  if (loading) {
    return <h1>loading...</h1>
  }

  return <>
    <h1>{data[0].title}</h1>
  </>;
}

export default App;
