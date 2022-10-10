import twitter from "./twitter.png"
import home from "./home.png"
import search from "./search.png"
import bell from "./bell.png"
import mail from "./mail.png"
import profile from "./profile.png"
import more from "./more.png"
import feather from './feather.png'
import Accounts from './accounts.png'
import './Navbar.css';
import {Link}  from "react-router-dom";
const Navbar =()=>{
    return (
        <div className="final">
        <div className="navbar">
        <img src={twitter} className="logo"></img><br></br>
        <Link to="/"><div className="home"><img src={home}></img></div></Link><br></br>

        <Link to="/search"><div className="search"><img src={search}></img></div></Link><br></br>

        <Link to="/"><div className="bell"><img src={bell}></img></div></Link><br></br>

        <Link to="/"><div className="mail"><img src={mail}></img></div></Link><br></br>

        <Link to="/"><div className="profile"><img src={profile}></img></div></Link><br></br>

        <Link to="/"><div className="more"><img src={more}></img></div></Link><br></br>

        <Link to="/"><div className="feather"><img src={feather}></img></div></Link><br></br>

        <Link to="/"><div className="accounts"><img src={Accounts}></img></div></Link>
        </div>
        <div className="vl"></div>
        </div>
    )
}
export default Navbar;