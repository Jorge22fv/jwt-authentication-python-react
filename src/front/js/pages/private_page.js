import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/private_page.css";

export const PrivatePage = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getEmail();
  }, [store.user_email]);

  return (
    <div className="private-page-container">
      <h1>Welcome to the Private Page</h1>
      {store.user_email && (
        <div>
          <p>Your email: {store.user_email}</p>
        </div>
      )}
    </div>
  );
};
