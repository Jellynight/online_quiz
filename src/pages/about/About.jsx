import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <nav>
      <NavLink to="/">Back To Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/quizOptions">Go To Options Menu</NavLink>
    </nav>
  )
}

export default Footer