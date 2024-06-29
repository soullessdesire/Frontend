import React from "react";
import Button from "../universal/Button";

const ForgotPass = () => {
  return (
    <div className="wrapper">
      <div className="nusu">
        <span>
          Serene.
          <br />
        </span>
        <h2>Forgot Password</h2>
        <p></p>
      </div>
      <div className="nusu">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email"></label>
          <div className="input_wrapper">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              onKeyDown={handleKeyDown}
            />
            <div className="after">Email</div>
          </div>
          <Button
            text={"Submit"}
            color={"white"}
            bg={"#3da33d"}
            type={"submit"}
            p={".75rem 3rem"}
          />
        </form>
      </div>
    </div>
  );
};

export default ForgotPass;
