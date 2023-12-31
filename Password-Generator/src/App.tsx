import { useState, useCallback, useEffect } from "react"

const App = () => {

  const [length, setLength] = useState(10);
  const [checkNum, setCheckNum] = useState(false);
  const [checkChar, setCheckChar] = useState(false);
  const [passwd, setPasswd] = useState("");

  const calculatePasswd = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(checkNum) str += "1234567890";
    if(checkChar) str += "!@#$%^&*";
    let pass = "";
    for(let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPasswd(pass);

  }, [length, checkNum, checkChar, setPasswd]);

  useEffect(() => {
    calculatePasswd();
  },[length, checkChar, checkNum])

  return (
    <div className = "outer-div">
      <input className = "input-box" type = "text" readOnly value = {passwd} />
      <button>copy</button>
      <div>
        <input type = "range" min={8} max={14} value = {length} onChange={(e) => {setLength(Number(e.target.value))}}/>
      </div>
      <div className="input-elements">
        <label>Length : {length}</label>
        <input type = "checkbox" onClick = {() => setCheckNum(!checkNum)} />
        <label>Number</label>
        <input type = "checkbox" onClick={() => setCheckChar(!checkChar)} />
        <label>Charecters</label>
      </div>
    </div>
  )
}

export default App
