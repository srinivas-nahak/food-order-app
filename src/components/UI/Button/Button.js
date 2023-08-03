import styles from "./Button.module.css";

const Button = (props) => {
  const { className, ...otherProps } = props;
  const copyProps = {
    className: `${styles.Button} ${className}`,
    ...otherProps,
  };

  return <button {...copyProps}>{copyProps.children}</button>;
};

export default Button;
