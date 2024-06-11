import React, {ChangeEvent} from "react";

interface InputProps {
  label: string;
  placeholder: string;
  value?: string;
  name: string;
  unit?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  placeholder,
  value,
  name,
  onChange,
}: InputProps) {
  return (
    <>
      <div className='intro-goal__input-item'>
        <span className='intro-goal__input-label'>{label}</span>
        <input
          className='intro-goal__input'
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          value={value}
        />
      </div>
    </>
  );
}
