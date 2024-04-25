import Modal from '@/components/Modal';

const ModalSelect = ({ setOpen, options, value, onChange, className }) => {
  return (
    <Modal setOpen={setOpen}>
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
    </Modal>
  );
};

export default ModalSelect;
