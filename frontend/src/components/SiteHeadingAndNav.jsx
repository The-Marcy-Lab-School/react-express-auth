import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
//import Header from "./Header";
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

 export default function SiteHeadingAndNav() {
   const { currentUser } = useContext(CurrentUserContext);

  const navigation = [
  //   { name: 'login', href: '/login', current: true },
  //   { name: 'Team', href: '/team', current: false },
  //   { name: 'Projects', href: '/projects', current: false },
  //   { name: 'Calendar', href: '/calendar', current: false },
  //   { name: "/", href: '/projects', current: false},
  //  // { name: "Users", href: "/users", current: false},
  //   { path: `/users/${currentUser?.id}`, href: currentUser?.username, current: false },
  //   { path: " Quiz Test", href: "/quiz-test", current: false },
  //   { path: "Selected Language", href: "/selected-language", current: false},
  //   { path: "/quiz-lesson", href: "Quiz Lesson", current: false },
  //   { path: "/login", href: "Login", current: false },
  //   { path: "/sign-up", href: "Sign Up" , current: false },
  ];


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://cdn.pixabay.com/photo/2016/08/25/07/30/orange-1618917_1280.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 list-none">
                  {currentUser ? 

                    // navigation.map((item) => (
                    //   <a
                    //     key={item.name}
                    //     to={item.href}
                    //     className={classNames(
                    //       item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    //       'rounded-md px-3 py-2 text-sm font-medium list-none'
                    //     )}
                    //     aria-current={item.current ? 'page' : undefined}
                    //   >
                    //     {item.name}
                    //   </a>
                    // ))
                    <>
              <li>
                <NavLink to={`/users/${currentUser.id}`}>
                  {currentUser.username}
                </NavLink>
              </li>
              <li>
                <NavLink to="/quiz-test">Quiz Test</NavLink>
              </li>
              <li>
                <NavLink to="/selected-language">Selected Language</NavLink>
              </li>
              <li>
                <NavLink to="/quiz-lesson">Quiz Lesson</NavLink>
              </li>
              <li>
                <NavLink to="/ai">AI</NavLink>
              </li>
              <li>
                <NavLink to="/message">Message</NavLink>
              </li>
              <li>
                <NavLink to="/discussion">Discussion</NavLink>
              </li>
              <li>
                <NavLink to="/auto-search">AutoSearch</NavLink>
              </li>
            </>
                   : 
                <>
              <li>
              <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/sign-up">Sign Up</NavLink>
              </li>
              
            </>
              //       <>

              //         <li>
              //           <a className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium list-none' href="/login" >Login</a>
              //         </li>
              //         <li>
              //           <a  className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium list-none' to="/sign-up">Sign Up</a>
              //         </li>
              //         <li>
              //           <a  className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium list-none' to="/quiz-test">Quiz Test</a>
              //         </li>
              //         <li>
              //           <a  className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium list-none' to="/users" end={true}>
              // Users</a>
              //         </li>
              //         <li>
              //           <a  className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium list-none' href="/selected-language">Selected Language</a>
              //         </li>
              //         <li>
              //           <a  className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium list-none' to="/quiz-lesson">Quiz Lesson</a>
              //         </li>
              //         <li>
              //           <a  className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium list-none' to="/sign-up">Sign Up</a>
              //         </li>
              //       </>
                  }
                </div>

                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  {/* <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div> */}
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    
      /* <Header /> */
      /* <a id="logo" href="/">
        Coming Soon...
      </a>
      <Nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/users" end={true}>
              Users
            </NavLink>
          </li>
          {currentUser ? (
            <>
              <li>
                <NavLink to={`/users/${currentUser.id}`}>
                  {currentUser.username}
                </NavLink>
              </li>
              <li>
                <NavLink to="/quiz-test">Quiz Test</NavLink>
              </li>
              <li>
                <NavLink to="/selected-language">Selected Language</NavLink>
              </li>
              <li>
                <NavLink to="/quiz-lesson">Quiz Lesson</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/sign-up">Sign Up</NavLink>
              </li>
            </>
          )}
        </ul>
      </Nav> */

    //  </div> 
  );
}
