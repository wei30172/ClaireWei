import './navbar.scss'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="title">
        <div className="name">
          <h1>Siao Ping, Wei</h1>
          <h3>Front End Developer</h3>
        </div>
        <div className="email">
          <span>claire610323@gmail.com</span>
        </div>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/work">Work</Link>
        <Link to="/project">Project</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;