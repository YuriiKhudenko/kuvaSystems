import styles from "./Button.module.css";

const Button = ({ children, onClick, className, type }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${className} ${styles[type]}`}
    >
      {children}
    </button>
  );
};

export default Button;
