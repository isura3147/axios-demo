import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);

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

  if (loading) {
    return <h1>LOADING...</h1>
  }

  return <>
      <div className="todos-container">
        {data.map((todo) => (
          <div className="card" key={todo.id}>
            <h3>{todo.title}</h3>
            <p>
              Status:
              <span
                className={
                  todo.completed ? "status-completed" : "status-pending"
                }
              >
                {todo.completed ? "Completed" : "Pending"}
              </span>
            </p>
          </div>
        ))}
      </div>
  </>;
}

export default App;
