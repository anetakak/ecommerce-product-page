import classes from "./Button.module.css";

const Button = ({ onClick, className, children}) => {
    const style = `${className} + ${classes.btn}`
    return <button onClick={onClick} className={style}>{children}</button>
}
export default Button;