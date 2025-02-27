import React from "react";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Accueil
      </NavLink>
      <NavLink to="/events" className={({ isActive }) => (isActive ? "active" : "")}>
        Événements
      </NavLink>
     

      <NavLink to="/add-event">Ajouter un Événement      </NavLink>

    </nav>
  );
}

export default NavigationBar;
