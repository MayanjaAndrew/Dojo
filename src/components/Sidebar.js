// styles
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import DashboardIcon from "../assets/dashboard_icon.svg";
import AddIcon from "../assets/add_icon.svg";

export default function SIdebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {/** avatar and username here later */}
          <p>Hey User</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="add project icon" />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
