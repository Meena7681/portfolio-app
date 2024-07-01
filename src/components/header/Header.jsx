import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
  // const authStatus = useSelector((state) => state.auth.status);
  // const navigate = useNavigate();
  let authStatus = false;
  const navItems = [
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    // {
    //   name: "All Posts",
    //   slug: "/all-posts",
    // },
    // {
    //   name: "Add Post",
    //   slug: "/add-post",
    // },
  ];

  const tabs = [
    { label: "Home", path: "/", active: true },
    { label: "Portfolio", path: "portfolio" },
    { label: "Service", path: "service" },
    { label: "Market", path: "market" },
    { label: "About", path: "about" },
    { label: "Projects", path: "projects" },
    { label: "Pricing", path: "pricing" },
    { label: "Contacts", path: "contacts" },
  ];

  return (
    <header>
      <nav className="bg-zinc-700 flex mt-0 py-2 px-10 justify-between items-center">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-1">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="bg-clip-text text-xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              ME
            </span>
          </Link>

          <div className="flex text-sm font-semibold items-center gap-5">
            {tabs.map((tabItem) => (
              <NavLink
                key={tabItem.key}
                to={tabItem.path}
                className={({ isActive }) =>
                  `${isActive ? "text-[#f1f1f1]" : "text-[#D1D1DF]"} `
                }
              >
                {tabItem.label}
              </NavLink>
            ))}
          </div>
        </div>
        {/* //mid tabs */}

        {/* //sign/out */}
        <div>
          <div
            id="mega-menu"
            className="items-center justify-between hidden w-full md:flex md:w-auto"
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
              {navItems.map((item) =>
                item.active ? (
                  <li
                    className="text-sm font-small dark:text-white"
                    key={item.name}
                  >
                    <button
                      // onClick={() => navigate(item.slug)}
                      className="inline-block duration-200 hover:bg-zinc-950 px-2 rounded-full  dark:text-white"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
            </ul>
          </div>
          {authStatus && (
            <li>
              Logout
              {/* <LogoutBtn /> */}
            </li>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
