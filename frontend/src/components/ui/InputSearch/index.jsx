import './style.css'

const InputSearch = ({
  type,
  value,
  onChange,
  placeholder
}) => {

  return (
   
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="input-search"
        placeholder={placeholder}
      />
    
  );
};

export default InputSearch;
