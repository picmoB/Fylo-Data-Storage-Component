import { useState , useEffect } from "react";

// File import
import logoMain from "./assets/images/logo.svg";
import logoFolder from "./assets/images/icon-folder.svg";
import logoUpload from "./assets/images/icon-upload.svg";
import logoDocument from "./assets/images/icon-document.svg";

// CSS
import "./App.css";

function App() {
  let [value, setValue] = useState(75);
  let [spaceUsed, setUsed] = useState(750);
  let [spaceLeft, setLeft] = useState(250);

  // Max space variable
  let maxSpace = 1000;

  function handleChange(e) {
    const val = e.target.value;
    setValue(val);
    e.target.style.setProperty("--progress", `${val}%`);

    setUsed(() => {
      spaceUsed = maxSpace * (val / 100);
      return spaceUsed;
    });

    setLeft(() => {
      spaceLeft = maxSpace - spaceUsed;
      return spaceLeft;
    });
  }

  // Console log every time when this variable is updated
  useEffect(() => {
    console.log(`Used: ${spaceUsed}, Left: ${spaceLeft}`);
  }, [spaceLeft]);

  return (
    <div className="data-storage-container">
      <div className="data-storage-left">
        <img className="logo-main" src={logoMain} alt="" />
        <div className="icons-holder">
          <div className="icon-div">
            <img src={logoDocument} alt="" />
          </div>
          <div className="icon-div">
            <img src={logoFolder} alt="" />
          </div>
          <div className="icon-div">
            <img src={logoUpload} alt="" />
          </div>
        </div>
      </div>
      <div className="data-storage-right">
        <h1>You've used{" "}<span className="size-num">{spaceUsed} GB</span>{" "}of your storage</h1>
        <div className="cloud-container">
          <div className="cloud-size">
            <p><span className="cloud-size-num">{spaceLeft}</span> GB left</p>
          </div>
          <span className="cloud-triangle"></span>
        </div>
        <div className="size-bar">
          <input 
            type="range"
            className="slider"
            onChange={handleChange}
            style={{"--progress": `${value}%` }}
            value={value}/>
          <div className="min-max-size">
            <p>0 GB</p>
            <p>1000 GB</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
