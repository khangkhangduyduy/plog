import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
      <div className="topLeft">
      <i class="sidebarIcon fa-brands fa-square-facebook"></i>
        <i class="sidebarIcon fa-brands fa-square-twitter"></i>
        <i class="sidebarIcon fa-brands fa-square-instagram"></i>
        <i class="sidebarIcon fa-brands fa-square-pinterest"></i>
        </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
          <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
          <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
          <li className="topListItem">
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
          <img className="topImg" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdXOcPjXox2hG1Qr2yJ0PKUM5QjAbkZnjSTw&usqp=CAU" 
        alt="" 
        />
        ):(
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>

              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}


