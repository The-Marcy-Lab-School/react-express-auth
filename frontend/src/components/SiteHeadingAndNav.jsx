import { NavLink, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import logo from "../imgs/logo.png"
import { Flex } from "@chakra-ui/react";

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [bgOpacity, setBgOpacity] = useState(0);

  const location = useLocation();
  const isHomepage = location.pathname === '/';
  const isCommunityPage = location.pathname === '/posts';
  const isArticlesPage = location.pathname === '/Articles';

  const position = (isHomepage || isCommunityPage || isArticlesPage) ? 'fixed' : 'relative';
  const textColor = isCommunityPage ? 'black' : 'white';
  const calculatedOpacity = (isHomepage || isCommunityPage || isArticlesPage) ? `${bgOpacity}` : '1';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.min(1, Math.round(scrollY / 20) * 0.7);
      setBgOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{ backgroundColor: `rgb(68,137,96, ${calculatedOpacity})`, zIndex: '10', alignItems: "center", height: "4rem" }}
      className={`${textColor} md:flex md:justify-between md:items-center ${position} top-0 sm:px-12 px-4 py-2 w-full height-64`}>
        <Flex align="center" className="PureLink">
          <a href="/" className="flex items-center">
            <img src={logo} className="h-10 mr-2" alt="logo" />
            {!isHomepage && "PureLink"}
          </a>
        </Flex>
      <nav>
        <ul className={`md:flex md:space-x-1 md:items-center`}>
          <div className="relative flex flex-col items-center">
            {
              !isHomepage &&
              <button onClick={() => setIsOpen(!isOpen)} className={`p-4 ${textColor}`}>
                Services
                {
                  isOpen && <div style={{ backgroundColor: `rgba(68,137,96, ${calculatedOpacity})` }} className={`${textColor} absolute top-[4rem]`}>
                    {
                      <ul className={`m-2 w-20`}>
                        <li><NavLink className='mb-1' to='/map'>Data Maps</NavLink></li>
                        <li><NavLink className='mb-1' to='/posts'>Posts</NavLink></li>
                        <li className="mb-1"><a href="/About-us">About Us</a></li>
                        <li><NavLink className='mb-1' to='/Articles'>Articles</NavLink></li>
                      </ul>
                    }
                  </div>
                }
              </button>

            }
          </div>
          {currentUser
            ? <li><NavLink className={`p-4 ${textColor}`} to={`/users/${currentUser.id}`}>{currentUser.username}</NavLink></li>
            : <>
              <li><NavLink className={`p-4 ${textColor}`} to='/login'>Login</NavLink></li>
              <li><NavLink
                  style={{ backgroundColor: "#45885f", borderRadius: "10px" }}
                  className={`p-4 ${textColor} hover:text-white`}
                  to='/sign-up'>
                  Sign Up
                </NavLink></li>
            </>
          }
        </ul>
      </nav>
    </header>
  );
}
