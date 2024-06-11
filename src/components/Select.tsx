import React, {ChangeEvent} from "react";

interface SelectProps {
  label: string;
  placeholder: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: {key: string | number; value: string; name: string}[];
}

export default function Select({
  label,
  placeholder,
  name,
  onChange,
  options,
}: SelectProps) {
  return (
    <>
      <div className='intro-goal__input-item'>
        <span className='intro-goal__input-label'>{label}</span>
        <select
          className='intro-goal__input'
          onChange={onChange}
          name={name}>
          <option
            className='intro-goal__input__select-default'
            value=''>
            {placeholder}
          </option>
          {options.map(option => (
            <option
              key={option.key}
              value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
