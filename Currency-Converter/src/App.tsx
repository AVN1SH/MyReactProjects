import Input from "./components/Input.tsx";
import {useState} from "react";
import useCurrencyInfo from "./hooks/customHook1.ts";

const App = () => {
  const [calculatedAmmount, setCalculatedAmmount] = useState(0);
  const [recievedAmmount, setRecievedAmmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const currencyInfo = useCurrencyInfo({currency : from});
  const currencyOptions = Object.keys(currencyInfo);

  const handleRecievedAmmount = (value : string) => {
    setRecievedAmmount(Number(value));
  }

  const calculateAmmount = () => {
    setCalculatedAmmount(recievedAmmount * currencyInfo[to]);
  }

  const swap = () => {
    setFrom(to);
    setTo(from);
    setRecievedAmmount(calculatedAmmount);
    setCalculatedAmmount(recievedAmmount);
  }
  
  return (
    <div className="outer-div">
      <Input 
        readOnly = {false} 
        handleRecievedAmmount={handleRecievedAmmount}
        currencyOptions={currencyOptions}
        handleSelectType={(type : string) => setFrom(type)}
        defaultCurrency= {from}
      />

      <Input 
        readOnly = {true} 
        calculatedAmmount={calculatedAmmount} 
        currencyOptions={currencyOptions}
        handleSelectType={(type : string) => setTo(type)}
        defaultCurrency={to}
      />
      <button className="tooltip" onClick={swap}>
        ↑ ↓
      </button>
      <button className="convert-button" onClick={calculateAmmount}>convert</button>
    </div>
  )
}

export default App
