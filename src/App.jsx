import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [err, setErr] = useState({});

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setData(res.data);
        console.log(res);
      } catch (err) {
        setErr(err);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  if (err) {
    return <h1>ERROR</h1>
  }

  return <>
  {loading ? (<h1>loading...</h1>) : (<h1>{data[0].title}</h1>)}
  </>;
}

export default App;
