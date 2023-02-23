import { forwardRef, InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, id, ...rest }, ref) => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input id={id} ref={ref} {...rest} />
      </>
    );
  }
);
