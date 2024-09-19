import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { X, Check } from "lucide-react";
import "../Pages/custom/user/User.css";

const Modal = ({ children, show, closeModal, window }) => {
  if (!show) return null;
  return createPortal(
    <div className="modal">
      <div className="overlay">
        {window ? (
          <>
            <div className="sub_clo">
              <button type="button" className="modal_clo" onClick={closeModal}>
                <X strokeWidth={1.5} />
              </button>
            </div>
            <div style={{ maxHeight: "500px", overflow: "hidden scroll" }}>
              {children}
            </div>
            <div
              className="content"
              style={{
                padding: "5px",
              }}
            >
              <button
                type="submit"
                className="modal_sub"
                onClick={closeModal}
                style={{
                  width: "105px",
                  height: "40px",
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  color: "#3da33d",
                }}
              >
                <Check strokeWidth={1.5} />
                <p>Submit</p>
              </button>
            </div>
          </>
        ) : (
          [children]
        )}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func,
  children: PropTypes.node.isRequired,
  window: PropTypes.bool.isRequired,
};

export default Modal;
