import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const HandleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((err) => { console.log(err) })
    }
    const menuItems = <>
        <li><Link className='font-bold' to='/blog'>Blog</Link></li>
        {
            user?.uid ? <>
                <li><Link className='font-bold' to='/dashboard'>Dashboard</Link></li>
                <li><button onClick={HandleLogOut} className='font-bold'>Logout</button></li>
            </>
                :
                <>
                    <li><Link className='font-bold' to='/login'>Login</Link></li>
                    <li><Link className='font-bold' to='/signup'>SignUp</Link></li>
                </>
        }
    </>
    return (
        <div className="bg-[url('/src/Assets/banner-bg.jpg')]">
            <div className="navbar text-white container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Mobile Resell Wizards</Link>
                    <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">

                        {
                            menuItems
                        }
                    </ul>
                    <label htmlFor="dashboard-drawer" tabIndex={3} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;