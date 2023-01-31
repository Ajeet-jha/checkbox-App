import "./styles.css";
import { useState } from "react";

export default function App() {
  const [lists, setLists] = useState([
    {
      id: 1,
      name: "bike"
    },
    {
      id: 2,
      name: "car"
    },
    {
      id: 3,
      name: "bus"
    },
    {
      id: 4,
      name: "train"
    }
  ]);
  const handleCheck = (e) => {
    const { id } = e.target;
    const _lists = [...lists];
    const updatedList = _lists.map((p) =>
      p.id === +id ? { ...p, isChecked: !p.isChecked } : p
    );
    setLists(updatedList);
  };
  return (
    <div className="App">
      {lists.map(({ id, name, isChecked }) => (
        <div key={id}>
          <input
            type="checkbox"
            id={id}
            name={name}
            value={name}
            checked={isChecked}
            onChange={handleCheck}
          />
          <label for="vehicle1"> I have a {name}</label>
        </div>
      ))}
    </div>
  );
}
