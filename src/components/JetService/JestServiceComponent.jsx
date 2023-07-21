import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const JestServiceComponent = () => {
  return (
    <div className="section jet-works">
      <h3>
        Kombi temizliğini hemen{" "}
        <NavLink className="service-link" to="jet-servisler">
          yaptır !
        </NavLink>
      </h3>
    </div>
  );
};

export default JestServiceComponent;
