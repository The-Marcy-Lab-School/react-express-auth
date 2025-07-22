import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context.js";
import { Button } from "./ui/button";
import { CreditCard, Users, User, Home, LogIn, UserPlus, ChevronRight } from "lucide-react";

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/20">
      <div className="flex h-20 items-center justify-between px-8">
        {/* Logo - modern design */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg shadow-primary/25">
            <span className="text-primary-foreground font-black text-xl">C</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">CardFinder</span>
        </div>

        {/* Center Navigation */}
        <nav className="flex items-center space-x-10" role="navigation" aria-label="Main navigation">
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              `text-base font-semibold transition-all duration-300 hover:text-primary hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                isActive ? 'text-primary' : 'text-foreground/70'
              }`
            }
          >
            Discover
          </NavLink>
          {/* <NavLink 
            to="/users" 
            className={({ isActive }) =>
              `text-base font-semibold transition-all duration-300 hover:text-primary hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                isActive ? 'text-primary' : 'text-foreground/70'
              }`
            }
          >
            Compare
          </NavLink> */}
          <NavLink 
            to="/about" 
            className={({ isActive }) =>
              `text-base font-semibold transition-all duration-300 hover:text-primary hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                isActive ? 'text-primary' : 'text-foreground/70'
              }`
            }
          >
            Learn
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) =>
              `text-base font-semibold transition-all duration-300 hover:text-primary hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                isActive ? 'text-primary' : 'text-foreground/70'
              }`
            }
          >
            Support
          </NavLink>
        </nav>

        {/* Right side - CTA button or user menu */}
        <div className="flex items-center space-x-4">
          {currentUser ? (
            <div className="flex items-center space-x-4">
              <NavLink 
                to={`/users/${currentUser.id}`}
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                {currentUser.username}
              </NavLink>
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </div>
          ) : (
            <Button asChild variant="default" size="sm" className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 px-6 py-3 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105">
              <NavLink to="/sign-up">
                Get Started
                <ChevronRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </NavLink>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
