import styles from '@/styles/modal.module.scss';

const Modal = ({ children, setOpen }) => {
  return (
    <div className={styles.modal}>
      {children}
      <div
        className={styles.modalDimmed}
        onClick={() => setOpen(false)}
      ></div>
    </div>
  );
};

export default Modal;
