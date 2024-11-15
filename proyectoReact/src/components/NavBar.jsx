import React, { useState } from 'react';
import NavButton from './NavButton.jsx';
import DropdownMenu from './DropMenu.jsx';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="nav_header">
        <div className="nav_logo">
          <a href="#">Cozyluxe</a>
        </div>
        <div className="nav_menu_btn" id="menu-btn" onClick={handleMenuClick}>
          <i className={menuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
        </div>
      </div>
      <ul className={`nav_links ${menuOpen ? 'open' : ''}`} id="nav-links">
        <li>
          <a href="#">LIVING</a>
          <DropdownMenu menu="LIVING" />
        </li>
        <li>
          <a href="#">DINING</a>
          <DropdownMenu menu="DINING" />
        </li>
        <li>
          <a href="#">BEDROOM</a>
          <DropdownMenu menu="BEDROOM" />
        </li>
        <li>
          <a href="#">OUTDOOR</a>
          <DropdownMenu menu="OUTDOOR" />
        </li>
        <li>
          <a href="#">LIGHTING</a>
          <DropdownMenu menu="LIGHTING" />
        </li>
        <li>
          <a href="#">DECOR</a>
          <DropdownMenu menu="DECOR" />
        </li>
        <li>
          <a href="#">RUGS</a>
          <DropdownMenu menu="RUGS" />
        </li>
        <li>
          <a href="#">OFFICE</a>
          <DropdownMenu menu="OFFICE" />
        </li>
        <li>
          <a href="#">SALE</a>
          <DropdownMenu menu="SALE" />
        </li>
        <li>
          <a href="#">DESIGN</a>
          <DropdownMenu menu="DESIGN" />
        </li>
      </ul>
      <div className="nav_btns">
        <NavButton
          defaultIcon="ri-search-2-line"
          hoverIcon="ri-search-fill"
          className="btn_sea"
        />
        <NavButton
          defaultIcon="ri-shopping-bag-4-line"
          hoverIcon="ri-shopping-bag-fill"
          className="btn_sho"
        />
        <NavButton
          defaultIcon="ri-user-line"
          hoverIcon="ri-user-fill"
          className="btn_use"
        />
      </div>
    </nav>
  );
};

export default NavBar;
