function TextAreaField({ name, placeholder, value, onChange }) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextAreaField;
