import React from 'react'
import logotype from '../assets/img/logo.svg';

function Header() {
    return (
        <header>
          <div className="wrapper">
              <div className="header-content">
                  <div className="header-content__logo">
                      <img src={logotype} alt="Logo"/>
                  </div>
                  <div className="header-content__nav">
                      <ul>
                          <li><a href="#">Главная</a></li>
                          <li><a href="#">Новости</a></li>
                          <li><a href="#">Пестициды</a></li>
                          <li><a href="#">Удобрения</a></li>
                          <li><a href="#">Энтомофаги</a></li>
                          <li><a href="#">Контакты</a></li>
                      </ul>
                      <div className="hamburger-btn">
                          <div className="hamburger-btn__row"></div>
                          <div className="hamburger-btn__row"></div>
                          <div className="hamburger-btn__row"></div>
                      </div>
                  </div>
                  <div className="header-content__contacts">
                      <div className="contact">
                          <p>info@sopravis.ru</p>
                          <a href="mailto:info@sopravis.ru">Написать на почту</a>
                      </div>
                      <div className="contact">
                          <p>+7 (926) 213 9435</p>
                          <a href="tel:+79262139435">Оставить заявку</a>
                      </div>
                  </div>
              </div>
          </div>
      </header>
    )
}

export default Header
