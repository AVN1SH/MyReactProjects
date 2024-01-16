import {useId, forwardRef,  InputHTMLAttributes } from "react"

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

  return (
    <div>
      {
        label && <label
          htmlFor = {id}>
            {label}
          </label>
      }
      <input 
        type={type}
        ref={ref}
        {...props}
        id = {id}
      />
    </div>
  )
})

export default Input;
//export default forwardRef(Input);  --------  we can also do this instead of wrapping the whole fuction inside the forwardRef..😁 