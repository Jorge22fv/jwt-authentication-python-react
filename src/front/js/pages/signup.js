import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const SignUp = () => {
  const { actions } = useContext(Context);
  const [form, setForm] = useState({ email: "", password: "" });
  const [confirm, setConfirm] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password === confirm) {
      actions.register(form);
    } else {
      console.log("las contraseñas no coinciden", form.password, confirm);
    }
  };

  const onChangeEmail = (e) => {
    setForm({ ...form, email: e.target.value });
  };

  const onChangeConfirm = (e) => {
    setConfirm(e.target.value);
  };

  const onChangePassword = (e) => {
    setForm({ ...form, password: e.target.value });
  };

  return (
    <div className="container signup-container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card text-black signup-card">
            <div className="card-body p-md-5 signup-card-body">
              <h1 className="text-center fw-bold mb-5">Sign up</h1>
              <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                <div className="mb-4">
                  <i className="fas fa-envelope fa-lg me-3 fa-fw signup-fa"></i>
                  <div className="form-outline signup-form-outline">
                    <input
                      type="email"
                      id="form3Example3c"
                      className="form-control"
                      onChange={onChangeEmail}
                      required
                    />
                    <label className="form-label" htmlFor="form3Example3c">
                      Your Email
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <i className="fas fa-lock fa-lg me-3 fa-fw signup-fa"></i>
                  <div className="form-outline signup-form-outline">
                    <input
                      type="password"
                      id="form3Example4c"
                      className="form-control"
                      onChange={onChangePassword}
                      required
                    />
                    <label className="form-label" htmlFor="form3Example4c">
                      Password
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <i className="fas fa-key fa-lg me-3 fa-fw signup-fa"></i>
                  <div className="form-outline signup-form-outline">
                    <input
                      type="password"
                      id="form3Example4cd"
                      className="form-control"
                      onChange={onChangeConfirm}
                      required
                    />
                    <label className="form-label" htmlFor="form3Example4cd">
                      Repeat your password
                    </label>
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-lg signup-btn-primary">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
