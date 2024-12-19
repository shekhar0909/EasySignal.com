import React, { FC } from "react";

type InputFieldProps = {
  label?: string; // Optional label for the input field
  error?: string; // Optional error message
  containerClassName?: string; // Optional class for the container
} & React.InputHTMLAttributes<HTMLInputElement>; // Includes all valid input attributes

export const InputField: FC<InputFieldProps> = ({
  label,
  error,
  containerClassName,
  className,
  ...inputProps
}) => {
  return (
    <div className={containerClassName || ""}>
      {label && <label className="input-label">{label}</label>}
      <input className={className || "w-[90%] my-2 px-5 py-6 rounded-lg mx-auto h-10 border text-black"} {...inputProps} />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};
