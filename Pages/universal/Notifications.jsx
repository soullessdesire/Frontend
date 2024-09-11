import "./public.css";
import PropTypes from "prop-types";
import { X } from "lucide-react";

const Notifications = ({ notification, onClose }) => {
  return (
    <>
      <p className="not_p">{notification}</p>
      <button onClick={onClose} className="not_button">
        <X strokeWidth={1.5} color={"white"} />
      </button>
    </>
  );
};
Notifications.propTypes = {
  notification: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Notifications;
