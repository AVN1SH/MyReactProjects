
interface Props {
  readOnly : boolean;
  calculatedAmmount? : number;
  handleRecievedAmmount? : (value : string) => void;
  currencyOptions : string[];
  handleSelectType : (type : string) => void;
  defaultCurrency : string;
}

const Input = ({readOnly, calculatedAmmount, handleRecievedAmmount, currencyOptions = [], handleSelectType, defaultCurrency}: Props) => {
  return (
    <>
      <div className = "input-box">
        <input 
          className="input-price" 
          type = "number" 
          placeholder = "0" 
          readOnly = {readOnly} 
          value={calculatedAmmount}
          onChange = {(e) => {handleRecievedAmmount && handleRecievedAmmount(e.target.value)}}
        />
        <select 
          className = "select-box" 
          value={defaultCurrency}
          onChange={(e) => handleSelectType && handleSelectType(e.target.value)}
         >

          {currencyOptions.map((option) => (<option key={option} >{option}</option>))}

        </select>
      </div>
    </>
  )
}

export default Input;
