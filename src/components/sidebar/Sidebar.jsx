import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="data:image/jpeg;base64,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"alt="" 
        />
        <p>The person who lives the most is not the one who lives the longest, but the one who has the most enriching experiences.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
        <i class="sidebarIcon fa-brands fa-square-facebook"></i>
        <i class="sidebarIcon fa-brands fa-square-twitter"></i>
        <i class="sidebarIcon fa-brands fa-square-instagram"></i>
        <i class="sidebarIcon fa-brands fa-square-pinterest"></i>
      </div>
      </div>
    </div>
  )
}
