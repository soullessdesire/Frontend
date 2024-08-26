import "./public.css";
import PropTypes from "prop-types";
import { X } from "lucide-react";

const Notifications = ({ notification, onClose }) => {
  return (
    <>
      <div className="not_content">
        <p>{notification}</p>
        <button onClick={onClose}>
          <X strokeWidth={1.5} />
        </button>
      </div>
    </>
  );
};
Notifications.propTypes = {
  notification: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Notifications;
