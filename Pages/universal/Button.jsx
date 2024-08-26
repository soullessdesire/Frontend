import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function Button({
  children,
  style,
  type,
  to,
  data,
  className,
  disabled,
  onClick,
}) {
  const navigate = useNavigate();

  // Handler for button click
  const handleClick = (event) => {
    if (disabled) return;

    if (onClick) {
      onClick(event);
    }

    if (to) {
      navigate(to, { state: data });
    }
  };

  return (
    <button
      type={type || "button"}
      onClick={handleClick}
      style={style}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  type: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  data: PropTypes.object,
  onClick: PropTypes.func,
};

export default Button;
