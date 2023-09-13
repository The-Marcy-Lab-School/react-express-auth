import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";

function NavigationLinks() {
  const { currentUser } = useContext(CurrentUserContext);

  // Define your navigation links as an array of objects
  const navLinks = [
    { path: "/", text: "Home" },
    { path: "/users", text: "Users", end: true },
    { path: `/users/${currentUser?.id}`, text: currentUser?.username },
    { path: "/quiz-test", text: "Quiz Test" },
    { path: "/selected-language", text: "Selected Language" },
    { path: "/quiz-lesson", text: "Quiz Lesson" },
    { path: "/login", text: "Login" },
    { path: "/sign-up", text: "Sign Up" },
    { path: "/ai", text: "AI" },
    { path: "/message", text: "Message" },
    { path: "/lesson", text: "Lesson" },

  ];

  return (
    <ul>
      {navLinks.map((link, index) => (
        <li key={index}>
          <NavLink to={link.path} end={link.end}>
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavigationLinks;
