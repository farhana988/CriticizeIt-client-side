/* eslint-disable react/prop-types */
const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="mb-6">
      <label className="block text-left font-medium mb-2">{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-4 py-2
        bg-lCard dark:bg-dCard 
        focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
};

export default InputField;