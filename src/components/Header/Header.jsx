import React from 'react';
import logo from '../../assets/img/pizza.svg';
import { BtnCard } from '../BtnCard';

export function Header() {
    return (
        <div class="header">
        <div class="container">
          <div class="header__logo">
            <img width="38" src={logo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
          <div class="header__cart">
            <BtnCard className = "button--cart"/>
          </div>
        </div>
      </div>
    )
}
