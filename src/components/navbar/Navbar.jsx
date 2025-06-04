import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="logoImg" src="logo.png" alt="" />
        <span>Heartman</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="/user.jpg" alt="" />
          <span>Heartman</span>
        </div>
        <img src="/setting.svg" alt="" className="icon" />
      </div>
    </div>
  );
}

export default Navbar;
