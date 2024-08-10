import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function Button({
  to,
  href,
  children,
  primary = false,
  onClick,
  small = false,
  large = false,
  outline = false,
  text = false,
  disabled = false,
  rouned = false,
  className,
  leftIcon,
  rightIcon,
  ...passProps
}) {
  let Comp = "button";
  const props = { onClick, ...passProps };
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on")&& typeof props[key] === "function") {
        delete props[key];
      }
    });
  }
  const classes = cx("wrapper", { primary, outline, small, text, large, disabled, rouned,leftIcon,rightIcon, [className]:className },);
  if (to) {
    props.href = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  return (
    <Comp className={classes} {...props}>
    {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
