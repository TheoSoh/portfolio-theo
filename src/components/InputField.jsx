
const InputField = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <div className='flex flex-col w-full h-fit'>
      <label className='font-mono'>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className='bg-blue border rounded-md px-2 max-w-60 focus:border-green'
      />
    </div>
  )
}

export default InputField