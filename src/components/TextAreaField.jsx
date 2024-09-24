

const TextAreaField = ({ label, name, value, onChange, placeholder }) => {
  return (
    <div className='flex flex-col w-full h-fit'>
      <label className='font-mono'>{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        rows='4'
        className='bg-blue border rounded-md px-2'
      ></textarea>
    </div>
  )
}

export default TextAreaField