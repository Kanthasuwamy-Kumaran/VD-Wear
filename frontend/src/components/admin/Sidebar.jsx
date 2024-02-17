import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { Link } from 'react-router-dom';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": "#1"}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> Admin
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="#1">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/userdetails">
                <a href="#1">
                    <BsFillArchiveFill className='icon'/> Users Details
                </a>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <a href="#1">
                    <BsFillGrid3X3GapFill className='icon'/> Web Articles
                </a>
            </li>

            <li className='sidebar-list-item'>
                <Link to="/userdetails">
                <a href="#1">
                    <BsPeopleFill className='icon'/> Shops Details
                </a>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <a href="#1">
                    <BsListCheck className='icon'/> Payment
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#1">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#1">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>

            <li className='sidebar-list-item'>
                
                <a href="https://studio.readyplayer.me/" target="_blank">
                    <BsFillArchiveFill className='icon'/> API Manage
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar