import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState, useId, forwardRef,  InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label : string;
  type : string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label, 
  type ='text', 
  ...props
}, ref) => {
  const id = useId();
  const [avatar, setAvatar] = useState<File | null>(null);

  
  return (
    <div className="label-input-container"
    style={avatar 
      ? {"backgroundImage" : `url(${URL.createObjectURL(avatar)})`, "backgroundSize" : "cover", "backgroundPosition" : "center"} 
      : {}}
    >
      {
        label &&
        type === "file" ?
          <label htmlFor={id}>{!avatar && 
          <FontAwesomeIcon icon={faUpload} />}
          {!avatar && label}
          </label>
        :
          <label htmlFor = {id}>
              {label}
          </label>
      }
      {type === "file" ?
        <input type={type} ref={ref}
        {...props}
        id = {id}
        onChange={(e) => e.target.files && setAvatar(e.target.files[0])}
      />
      :
      <input type={type} ref={ref}
        {...props}
        id = {id}
      />
      } 
    </div>
  )
})

export default Input;
//export default forwardRef(Input);  --------  we can also do this instead of wrapping the whole fuction inside the forwardRef..😁 