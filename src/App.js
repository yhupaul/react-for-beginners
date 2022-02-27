import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) =>  setToDo(event.target.value);
  const onSumit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    };
    setToDos((currentArr) => [toDo, ...currentArr]);
    setToDo("");
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSumit}>
        <input 
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr /> 
      {toDos.map((item, index) => (
      <li key={index}>{item}</li>
      ))};
    </div>
  );
}

export default App;
