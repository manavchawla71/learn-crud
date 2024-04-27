import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [itemdata, setitemdata] = useState([{ item: "", count: "" }]);

  const addrow = () => {
    debugger;
    setitemdata([...itemdata, { item: "", count: "" }]);
  };
  return (
    <>
      <label>Name</label>
      <input type="text" />
      <br />
      <label>Date</label>
      <input type="date" />
      <br />
      <button onClick={addrow}>+</button>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Count</th>
          </tr>
        </thead>
        {itemdata.length > 0 &&
          itemdata.map((item, index) => (
            <tbody key={index}>
              <tr>
                <td>
                  <input type="text" value={item.item} />
                </td>
                <td>
                  <input type="text" value={item.count} />
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </>
  );
}

export default App;
