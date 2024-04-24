const ModalSelect = ({ isOpen, setOpen, options, value, onChange, className }) => {
  return (
    <ul className={className}>
      {options.map((item, key) => {
        return (
          <li
            key={key}
            className={value == item.value ? 'active' : ''}
          >
            <button
              onClick={() => {
                onChange(item.value);
              }}
            >
              {item.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ModalSelect;
