import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Nav = () => {
  const navLinkClasses = ({ isActive }) =>
    `hover:text-purple-300 transition-colors ${isActive ? 'text-purple-300' : ''}`;

  return (
    <nav className="bg-slate-900 text-white p-4 shadow-lg border-b border-purple-500/20" role="navigation" aria-label="Main">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-purple-300 transition-colors">
          Beyond The Code
        </Link>

        <ul className="flex gap-4 list-none m-0 p-0">
          <li><NavLink to="/" className={navLinkClasses}>Home</NavLink></li>
          <li><NavLink to="/profile" className={navLinkClasses}>Profile</NavLink></li>
          <li><NavLink to="/search" className={navLinkClasses}>Jobs</NavLink></li>
          <li><NavLink to="/certifications" className={navLinkClasses}>Certifications</NavLink></li>
          <li><NavLink to="/MentorMatch" className={navLinkClasses}>Mentor Match</NavLink></li>

<<<<<<< HEAD

=======
>>>>>>> 3e13479b94971f9f44624de982c1434f8ee8c517
        </ul>
      </div>
    </nav>
  );
};

export default Nav;