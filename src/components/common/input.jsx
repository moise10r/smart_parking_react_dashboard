const Input = ({label, name,value, type, onchange, icon}) => {
  return ( 	<label htmlFor={name}>
  <p>{name}</p>
  <div className='input-content'>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      placeholder={label}
      onChange={onchange}
    />
    <span>
      {icon}
    </span>
  </div>
</label> );
}
 
export default Input;