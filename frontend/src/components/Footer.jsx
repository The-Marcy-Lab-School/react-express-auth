import { NavLink } from "react-router-dom";
import logo from "../imgs/logo.png"

export default function Footer() {
  return (
      <footer className="bg-[#808080] text-white bottom-0 relative">
          <div style={{ backgroundColor: "#448960", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
                  <div style={{ display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center", flexDirection: "row", paddingRight: "4rem" }}>
                    <a href="/" className="flex items-center">
                      <img src={logo} className="h-10" alt="logo" />
                      PureLink
                    </a>
                  </div>
              </h1>
              <ul style={{ display: "flex", textAlign: "center", justifyContent: "space-between", alignContent: "center", flexDirection: "row", marginBottom: "1rem" }}>
                  <li><NavLink className="mr-10" to='/About-us'>About Us</NavLink></li>
                  <li><NavLink className="mr-10" to='/Articles'>Learn More</NavLink></li>
                  <li><NavLink className="mr-10" to='/posts'>Community Posts</NavLink></li>
                  <li><NavLink className="mr-10" to='/map'>Maps</NavLink></li>
              </ul>
          </div>
          <div>
              <ul className="text-white" style={{ display: "flex", textAlign: "center", justifyContent: "space-between", alignContent: "center", flexDirection: "row", marginLeft: "5rem", marginRight: "5rem" }}>
                  <li className="mb-4 mr-2">© 2022 PureLink. All rights reserved.</li>
                  <li className="mb-4 ml-2">Terms · Privacy Policy</li>
              </ul>
          </div>
      </footer>
  );
}