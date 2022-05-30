import React, { useState } from 'react'
import {
  AiOutlineDashboard,
  AiOutlineFolder,
  AiOutlineMessage,
  AiOutlineUser
} from 'react-icons/ai'
import { BsBookmark } from 'react-icons/bs'
import { BiStats } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { FaReact } from 'react-icons/fa'
import classnames from 'classnames'
import classNames from 'classnames'

interface SidebarProps {
  children?: React.ReactNode
}

const Sidebar = ({ children }: SidebarProps) => {
  const [show, setShow] = useState(true)

  function toggleSidebar() {
    setShow(!show)
  }
  return (
    <>
      <div
        className={classnames('l-navbar', show && 'show-sidebar')}
        id="nav-bar"
      >
        <nav className="nav">
          <div>
            <a
              onClick={() => {
                toggleSidebar()
              }}
              role="button"
              className="nav_logo"
            >
              <FaReact className="nav_logo-icon" />
              <span className="nav_logo-name">Lorem Ipsum Amet</span>
            </a>
            <div className="nav_list">
              <a href="#" className="nav_link">
                <AiOutlineDashboard className="nav_icon" />
                <span className="nav_name">Dashboard</span>
              </a>
              <a href="#" className="nav_link active">
                <AiOutlineUser className="nav_icon" />
                <span className="nav_name">Customers</span>
              </a>
              <a href="#" className="nav_link">
                <AiOutlineMessage className="nav_icon" />
                <span className="nav_name">Messages</span>
              </a>
              <a href="#" className="nav_link">
                <BsBookmark className="nav_icon" />
                <span className="nav_name">Bookmark</span>
              </a>
              <a href="#" className="nav_link">
                <AiOutlineFolder className="nav_icon" />
                <span className="nav_name">Files</span>
              </a>
              <a href="#" className="nav_link">
                <BiStats className="nav_icon" />
                <span className="nav_name">Stats</span>
              </a>
            </div>
          </div>
          <a href="#" className="nav_link">
            <FiLogOut className="nav_icon" />
            <span className="nav_name">SignOut</span>
          </a>
        </nav>
      </div>
      <div className={classNames('main-content', show && 'open')}>
        {children}
      </div>
    </>
  )
}

export default Sidebar
