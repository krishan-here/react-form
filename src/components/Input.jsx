function Input({ label, id, error, ...props }) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      {error && <p className="error-text">{error}</p>}
    </div>
  );
}

export default Input;
