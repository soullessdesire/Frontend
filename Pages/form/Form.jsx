import "./Form.css";
import { Outlet } from "react-router-dom";

function Form() {
  return (
    <>
      <main className="log_main">
        <Outlet />
      </main>
    </>
  );
}
export default Form;
