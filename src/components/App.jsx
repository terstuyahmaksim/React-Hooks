import React, { useState, useEffect, useRef } from "react";

//import styles sheets
import styleApp from "../styles/App.scss";

const App = () => {
  const [edit, setEdit] = useState(false);
  const [persone, setPersone] = useState({
    img:
      "https://thedifference.ru/wp-content/uploads/2013/11/chem-otlichaetsya-sotrudnik-ot-rabotnika.jpg",
    name: "Василий",
    position: "Front-End Developer",
    status: "В отпуске"
  });
  const ref = useRef(null);
  const statusList = [
    "В отпуске",
    "На работе",
    "В командировке",
    "На больничном"
  ];
  const outsideClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      setEdit(false);
    }
  };
  const updatePersone = (field, value) => {
    setPersone({ ...persone, [field]: value });
  };
  useEffect(() => {
    document.addEventListener("click", outsideClick);
    return () => document.removeEventListener("click", outsideClick);
  }, []);

  return (
    <div ref={ref} className={"widget"}>
      <div onClick={() => setEdit(!edit)} className={"window"}>
        <img className={"img"} src={persone.img} alt="Smiley face" />
        <div className="text-wrapper">
          <div className={"name"}>{persone.name}</div>
          <div className={"position"}>{persone.position}</div>
          <div className={"status"}>{persone.status}</div>
        </div>
      </div>
      {edit && (
        <div className={"popover"}>
          <span>Имя</span>
          <input
            type="text"
            value={persone.name}
            onChange={e => updatePersone("name", e.target.value)}
          />
          <span>Должность</span>
          <input
            type="text"
            value={persone.position}
            onChange={e => updatePersone("position", e.target.value)}
          />
          <span>Статус: </span>
          <ul>
            {statusList.map(status => (
              <li
                key={status}
                className={persone.status === status ? "active" : ""}
                onClick={() => updatePersone("status", status)}
              >
                {status}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
