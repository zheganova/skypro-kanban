import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  /* Общие стили для ссылок */
  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  /* Общие стили для кнопок и элементов с классом _btn */
  button,
  ._btn {
    cursor: pointer;
    outline: none;
  }

  /* Стили для элементов списка */
  ul li {
    list-style: none;
  }

  /* Базовые стили для html и body */
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: #000000;
  }

  /* Стили для корневого элемента #root */
  #root {
    margin: 0 auto;
    text-align: center;
  }

  /* Общие классы для макета */
  .wrapper {
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: #eaeef6;
  }

  .container {
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
  }

  ._orange {
    background-color: #ffe4c2;
    color: #ff6d00;
  }

  ._green {
    background-color: #b4fdd1;
    color: #06b16e;
  }

  ._purple {
    background-color: #e9d4ff;
    color: #9a48f1;
  }

  ._gray {
    background: #94a6be;
    color: #ffffff;
  }

  ._active-category {
    opacity: 1 !important;
  }

  /* Анимации */
  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes card-animation {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: auto;
      opacity: 1;
    }
  }

  /* Классы для кнопок */
  ._btn-bor {
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, #565eef);
    outline: none;
    background: transparent;
    color: #565eef;
  }
  ._btn-bor a {
    color: #565eef;
  }

  ._btn-bg {
    border-radius: 4px;
    background: #565eef;
    border: none;
    outline: none;
    color: #ffffff;
  }
  ._btn-bg a {
    color: #ffffff;
  }

  /* Утилитарные классы для отображения */
  ._hide {
    display: none;
  }

  ._dark { /* Используется для переключения темной темы логотипа */
    display: none;
  }

  /* Стили для лоадера/сообщения о загрузке */
  .loading-message {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 24px;
    color: #8B8B8B;
  }

  @media (prefers-reduced-motion: no-preference) {
    a:nth-of-type(2) .logo { /* Это очень специфично для logo, возможно, лучше к компоненту Logo */
      animation: logo-spin infinite 20s linear;
    }
  }
`;
