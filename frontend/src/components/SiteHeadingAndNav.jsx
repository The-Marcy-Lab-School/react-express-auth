import { NavLink, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../contexts/current-user-context";

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [bgOpacity, setBgOpacity] = useState(0);

  const location = useLocation();
  const isHomepage = location.pathname === '/';
  
  const position = isHomepage ? 'fixed' : 'relative';
  const calculatedOpacity = isHomepage ? `${bgOpacity}` : '1';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.min(1, Math.round(scrollY / 20) * 0.03);
      setBgOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
    style={{ backgroundColor: `rgba(238, 144, 51, ${calculatedOpacity})`}} 
    className={`text-white md:flex md:justify-between md:items-center ${position} top-0 sm:px-12 px-4 py-2 w-full height-64`}
    >
      <a id='logo' href='/'>React/Express Auth</a>
      <nav>
        <ul className={`md:flex md:space-x-1 md:items-center`}>
          <div className="relative flex flex-col items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`p-4 text-white`}>
              Services
              {
                isOpen && <div style={{ backgroundColor: `rgba(238, 144, 51, ${calculatedOpacity})` }} className={` text-white absolute top-[4rem]`}>
                  {
                    <ul className={`m-2 w-20`}>
                      <li className="mb-1"><a href="/maps">Data Maps</a></li>
                      <li className="mb-1"><a href="/Posts">Posts</a></li>
                    </ul>
                  }
                </div>
              }
            </button>
          </div>
          {currentUser
            ? <li><NavLink className={`p-4 text-white`} to={`/users/${currentUser.id}`}>{currentUser.username}</NavLink></li>
            : <>
              <li><NavLink className={`p-4 text-white`} to='/login'>Login</NavLink></li>
              <li><NavLink className={`p-4 text-white`} to='/sign-up'>Sign Up</NavLink></li>
            </>
          }
        </ul>
      </nav>
    </header>
  );
}
