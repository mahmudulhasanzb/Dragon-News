import Image from 'next/image';
import React from 'react'
import user from '@/assets/user.png';
import Link from 'next/link';
import NavLink from './NavLink';


const navLink = (
  <>
    <li>
      <NavLink href={'/'}>Home</NavLink>
    </li>
    <li>
      <NavLink href={'/about-us'}>About</NavLink>
    </li>
    <li >
      <NavLink  href={'/career'} >Career</NavLink>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className="navbar container mx-auto bg-base-100 shadow-sm mt-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-4"
          >
{navLink}           
          </ul>
        </div>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10">
{navLink}
          
        </ul>
      </div>
      <div className="navbar-end gap-2 items-center">
        <Link href={'/account'}>
          <Image src={user} width={35} height={35} alt="Login" />
        </Link>
        <Link href={'/login'} className="btn btn-neutral">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar