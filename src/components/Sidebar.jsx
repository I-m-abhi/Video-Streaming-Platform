import { useSelector } from "react-redux";
import { Link } from "react-router";

const Sidebar = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  
  return (
    <div className="p-5 shadow-lg">
      <ul>
        <li className="font-bold">
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <Link to="/demo">Demo</Link> */}
        </li>
        <li> Shorts</li>
        <li> Videos</li>
        <li> Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar;
