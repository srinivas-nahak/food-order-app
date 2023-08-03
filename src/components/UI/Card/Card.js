import styles from "./Card.module.css";

const Card = (props) => {
  const { className, ...otherProps } = props;
  const copyProps = { className: `${styles.Card} ${className}`, ...otherProps };

  return <div {...copyProps}>{copyProps.children}</div>;
};

export default Card;
