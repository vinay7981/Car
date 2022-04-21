import React, { useContext } from "react";
import i3 from "../assets/i3.jpg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import AuthContext from '../store/auth-context'


function Navbar() {
  // const [openLinks, setOpenLinks] = useState(false);
  const authctx = useContext(AuthContext);
  const isLoggedIn= authctx.isLoggedIn;
  const logoutHandler = () =>{
    authctx.logout();
  }
  // const toggleNavbar = () => {
  //   setOpenLinks(!openLinks);
  // };
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={i3} alt="food"/>
        <div className="hiddenLinks">
          {
            isLoggedIn && (
              <Link to="/"> Home </Link>
            )
          }
          
          {/* {
            isLoggedIn && (
              <Link to="/menu"> Menu </Link>
            )
          } */}

          {
            isLoggedIn && (
              <Link to="/about"> About </Link>
            )
          }

          {
            isLoggedIn && (
              <Link to="/cars"> Book now </Link>
            )
          }

         
          {
            isLoggedIn && (
              <Link to="/contact"> Contact </Link>
            )
          }

          {
            isLoggedIn && (
              <Link to="/password"> Password </Link>
            )
          }
          
          {isLoggedIn && (
                   
                        <button onClick={logoutHandler} className="btn btn-dark">LogOut</button>
                    )}
          
          {
            !isLoggedIn && (
              <Link to="/signin"> Signin </Link>
            )
          }

          {
            !isLoggedIn && (
              <Link to="/login"> Login </Link>
            )
          }
        </div>
      </div>
      {/* <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to='/signin'>Signin</Link>
        <Link to='/login'>Login</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div> */}
    </div>
  );
}

export default Navbar;
