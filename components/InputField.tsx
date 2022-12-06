import { useRef } from 'react';

interface InputFieldProps {
  id: string;
  placeholder: string;
  label: string;
  type: string;
  required: boolean;
}
//TODO: add form validation
const InputField: React.FC<InputFieldProps> = ({ id, placeholder, label, type }) => {
  return (
    <div className='mb-4'>
      <label className='text-gray-700 text-sm font-bold mb-2' htmlFor={id}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        //TODO: bad practice should change in near future
        id={id}
      ></input>
    </div>
  );
};

export default InputField;
