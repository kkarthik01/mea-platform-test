import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const addInput = () => {
    if (firstName && secondName) {
      if (list) {
        let validName = list.find(
          (x) => x.firstName === firstName && x.secondName === secondName
        );
        if (validName) {
          document.getElementById("output").innerHTML = "User already exists";
          return;
        }
      }
      setList([
        ...list,
        {
          firstName,
          secondName,
        },
      ]);
      setFirstName("");
      setSecondName("");
      document.getElementById("output").innerHTML = "Signed up successfully";
    }
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <div className="App">
      <div>Enter Name</div>
      <input
        onClick={() => (document.getElementById("output").innerHTML = "")}
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      ></input>
      <input
        type="text"
        value={secondName}
        onChange={(e) => setSecondName(e.target.value)}
      ></input>
      <button onClick={() => addInput()}>Submit</button>
      <div id="output"></div>
    </div>
  );
}

export default App;
