import { useState } from "react";

function Menu({ props1, props2 }) {
  const [kelas, setKelas] = useState(true);

  const clickHandler = () => {
    setKelas(!kelas);
  };

  return (
    <div className="menu">
      <h1>{kelas ? "FSW 2 luar Biasa" : "MEMANG LUAR BIASA"}</h1>
      <button onClick={clickHandler}>Click Me</button>
      <ul>
        <li>
          <a href="" target="_blank">
            HTML {props1}
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            CSS {props2}
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            JavaScript
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
