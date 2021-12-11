import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
Menu.propTypes = {};

function Menu(props) {
  return (
    <section className="menu">
      <div className="menu__item-wrap">
        {/* <NavLink className="menu__item"> </NavLink> */}

        <div className="menu__item">
          <a href="#">
            <span>Bakery</span>
          </a>
          <div className="menu__item--icon">

          </div>
        </div>
        <div className="menu__item">
          <a href="#">
            <span>Fruit and vegetables</span>
          </a>
          <div className="menu__item--icon">

          </div>
        </div>
        <div className="menu__item">
          <a href="#">
            <span>Meat and fish</span>
          </a>
          <div className="menu__item--icon">

          </div>
        </div>
        <div className="menu__item">
          <a href="#">
            <span>Drinks</span>
          </a>
          <div className="menu__item--icon">

          </div>
        </div>
        <div className="menu__item">
          <a href="#">
            <span>Kitchen</span>
          </a>
          <div className="menu__item--icon">

          </div>
        </div>
        <div className="menu__item">
          <a href="#">
            <span>Special nutrition</span>
          </a>
          <div className="menu__item--icon">

          </div>
        </div>
        <div className="menu__item">
          <a href="#">
            <span>Baby</span>
          </a>
          <div className="menu__item--icon">

          </div>
        </div>
        <div className="menu__item">
          <a href="#">
            <span>Pharmacity</span>
          </a>
          <div className="menu__item--icon">

          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
