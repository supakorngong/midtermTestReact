import { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";
import { useNavigate } from "react-router-dom";

function Todolist() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const handleLogout = (e) => {
    navigate("/");
  };
  const fetchData = async () => {
    try {
      const response = await axios.get("https://cc17-assessment-api.onrender.com/v1/todo?userId=26");
      // console.log(response.data);
      setData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  const deleteToDo = async (id) => {
    try {
      await axios.delete(`https://cc17-assessment-api.onrender.com/v1/todo/${id}?userId=26`);
      console.log("delete done");
      fetchData();
    } catch (err) {
      console.log(err);
    }
    // console.log(deleteResponse.status);
    // const foundIndex = data.findIndex((item) => item.id === id);
    // setData((prev) => prev.splice(foundIndex, 1));
  };

  const createToDo = async () => {
    try {
      const addData = { title: input, status: false };
      const createResponse = await axios.post("https://cc17-assessment-api.onrender.com/v1/todo?userId=26", addData);
      setData((prev) => [...prev, createResponse.data.data]);
      console.log(createResponse.data.data);
      // fetchData();
    } catch (err) {
      console.log(err);
    }
  };
  const updateData = async (id) => {
    try {
      const dataResponse = { title: input };
      await axios.patch(`https://cc17-assessment-api.onrender.com/v1/todo/${id}?userId=26`, dataResponse);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="page">
        <div className="App">
          <div className="header">
            <h1>My To Do</h1>
            <button onClick={() => createToDo()}>🚀</button>
          </div>
          <div className="inputbox">
            <p>new task</p>
            <input value={input} onChange={(event) => setInput(event.target.value)} />
          </div>
          <div className="todolist">
            {data.map((item) => (
              <>
                <div className="eachTodo">
                  <input type="checkbox" id={item.id} name={item.title} />
                  <label htmlFor={item.title}>{item.title}</label>
                  <button onClick={() => deleteToDo(item.id)}>delete</button>
                  <button onClick={() => updateData(item.id)}>edit</button>
                </div>
              </>
            ))}
          </div>
          <div className="logout">
            <button onClick={handleLogout}>logout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todolist;
