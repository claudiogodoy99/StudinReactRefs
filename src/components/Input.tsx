import React, { InputHTMLAttributes,forwardRef } from 'react';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name:string,
    label:string
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement,InputProps> = ({name,label, ...rest},ref) => {
  return (
      <div>
          <label htmlFor={name}>{label}</label>
          <input {...rest}
          ref={ref}/>
      </div>
  );
}

export default forwardRef(Input);