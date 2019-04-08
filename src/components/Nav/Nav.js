import React from "react";
import { Link } from "react-router-dom";

function Nav() {
   return (
      <div>
         <div className="nav-item">
            <Link to="/initial" className={window.location.pathname === "/initial" ? "nav-link active" : "nav-link"}>
               Initial Dose
            </Link>
         </div>
         <div className="nav-item">
            <Link to="/auc" className={window.location.pathname === "/auc" ? "nav-link active" : "nav-link"}>
               AUC
            </Link>
         </div>
      </div>
   );
}

export default Nav;