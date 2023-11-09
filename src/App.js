import { useState } from "react";
import "./App.css";

function App() {
  const [index, setIndex] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = (id) => {
    setIndex(id);
  };

  return (
    <div className={darkMode ? "container dark_theme" : "container"}>
      <header>
        <h1>MakeUp Essentials</h1>
        <p>The ultimate guide to creating the ultimate makeup collection</p>
        <i
          onClick={() => setDarkMode(!darkMode)}
          className={darkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}
        ></i>
      </header>
      <main>
        <div className="tabs">
          {data.map((item) => {
            return (
              <div
                onClick={() => handleClick(item.id)}
                className="tab"
                key={item.id}
              >
                {item.name}
              </div>
            );
          })}
        </div>
        <div className="tabs_text">
          <div className="text">
            <h1>{data[index - 1].name}</h1>
            <p>{data[index - 1].text}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

const data = [
  {
    name: "Face Primer",
    id: 1,
    text: " 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla possimus voluptate eum saepe inventore voluptatibus, perferendis quasi ipsum accusantium. Voluptatum corporis cum asperiores aliquam explicabo.",
  },
  {
    name: "Foundation",
    id: 2,
    text: " 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla possimus voluptate eum saepe inventore voluptatibus, perferendis quasi ipsum accusantium. Voluptatum corporis cum asperiores aliquam explicabo.",
  },
  {
    name: "BB Cream",
    id: 3,
    text: "3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla possimus voluptate eum saepe inventore voluptatibus, perferendis quasi ipsum accusantium. Voluptatum corporis cum asperiores aliquam explicabo.",
  },
  {
    name: "Concealer",
    id: 4,
    text: "4 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla possimus voluptate eum saepe inventore voluptatibus, perferendis quasi ipsum accusantium. Voluptatum corporis cum asperiores aliquam explicabo.",
  },
  {
    name: "Blush",
    id: 5,
    text: " 5 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla possimus voluptate eum saepe inventore voluptatibus, perferendis quasi ipsum accusantium. Voluptatum corporis cum asperiores aliquam explicabo.",
  },
];
