import React from "react";
import style from './header.module.scss';

class NavBar extends React.Component {
  render() {
    return (
      <header>
        <nav className={style.navbar}>
          <ul className={style.nav___menu}>
            <h1>STREAM-PROJECT</h1>
            <li className={style.nav___item}><a href="#" className={style.nav___link}>Home</a></li>
            <li className={style.nav___item}><a href="#" className={style.nav___link}>TV Shows</a></li>
            <li className={style.nav___item}><a href="#" className={style.nav___link}>Movies</a></li>
            <li className={style.nav___item}><a href="#" className={style.nav___link}>Animes</a></li>
            <li className={style.nav___item}><a href="#" className={style.nav___link}>Lastest</a></li>
            <li className={style.nav___item}><a href="#" className={style.nav___link}>My List</a></li>
          </ul>
          <div className={style.search}>
            <input type="text" placeholder="Search" />
            <i className="icon-search"></i>
          </div>
          <img className={style.menu___Image} src="/img/Login.png" alt="login" />
        </nav>
      </header>
    );
  }
}

export default NavBar;
