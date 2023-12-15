import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [token, setToken] = useState();
  const history = useHistory();

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, [store.loged]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark mb-5">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Home
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {token && (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-primary"
                  onClick={() => {
                    actions.logout();
                    history.push("/");
                  }}
                >
                  Logout
                </button>
              </li>
            )}

            {!token && (
              <li className="nav-item">
                <Link to="/login" className="nav-link btn btn-primary">
                  Log in
                </Link>
              </li>
            )}

            {token && (
              <li className="nav-item">
                <Link to="/private_page" className="nav-link btn btn-primary">
                  Private
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
