const SelectField = ({ label, options, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>
      <select
        className="w-full border rounded px-3 py-2"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        <option value="">Select {label}</option>
        {options.map(opt => (
          <option key={opt._id} value={opt._id}>
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
